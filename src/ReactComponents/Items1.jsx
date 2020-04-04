import React, { Component } from "react";
import { Card, Carousel, Row, Col, Button } from "antd";
import myTestData from "./itemCollection1.json";
import {
  HeartOutlined,
  ShoppingOutlined,
  HeartFilled
} from "@ant-design/icons";

class Items1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsToShow: [],
      category: this.props.match.params.category,
      subCategory: this.props.match.params.subCategory,
      photoIndex: 0,
      isOpen: false,
      imageLightBox: [],
      wishListedItems: this.props.wishListedItems,
      cartItems: this.props.cartItems
    };
  }

  componentWillReceiveProps() {
    this.setState({ category: this.props.match.params.category });
    this.setState({ subCategory: this.props.match.params.subCategory });
    this.setState({ cartItems: this.props.cartItems });
    this.setState({ wishListedItems: this.props.wishListedItems });
  }

  render() {
    console.log(this.props.isAuthed);
    const { photoIndex, isOpen } = this.state;
    const { Meta } = Card;
    if (myTestData === undefined) {
      return "loading";
    }

    console.log(myTestData.items);
    console.log(this.props.match.params.category);
    console.log(this.props.match.params.subCategory);

    console.log(this.state.category);
    console.log(this.state.subCategory);
    let cat = this.state.category;
    let subCat = this.state.subCategory;

    let filteredItems = myTestData.items.filter(item => {
      if (item.category === cat && item.subCategory === subCat) return item;
    });
    console.log(filteredItems);
    // return JSON.stringify(adults);
    filteredItems.map(item => {
      console.log(item.description);
    });

    return (
      //   <Row
      //     style={{
      //       height: "92vh",
      //       width: "100%",
      //       backgroundColor: "pink",
      //       border: "5px solid green"
      //     }}
      //   >
      //     <div>
      //       {this.props.match.params.category}-{" "}
      //       {this.props.match.params.subCategory}
      //     </div>
      //   </Row>

      <Row style={{ height: "", width: "100%" }}>
        {filteredItems.map(item => {
          return (
            <Col key={item.id} span={8}>
              <Card
                style={{
                  margin: "15%",
                  // maxHeight: "500px",
                  border: "5px solid yellow"
                  //   backgroundColor: "lightgrey"
                }}
                hoverable
                cover={
                  <img
                    onClick={e => this.clickImg(item)}
                    style={{
                      width: "100%",
                      height: "50vh", //"450px",
                      objectFit: "fit"
                    }}
                    alt="example"
                    // src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    src={item.images[0]}
                  />
                }
                actions={[
                  this.state.wishListedItems.filter(e => e.id === item.id)
                    .length === 0 ? (
                    <HeartOutlined onClick={e => this.addToWishList(item)} />
                  ) : (
                    <HeartFilled
                      // theme="filled"
                      style={{ color: "#1890ff" }}
                      onClick={e => this.removeFromWishlist(item)}
                    />
                  ),
                  this.state.cartItems.filter(e => e.id === item.id).length ===
                  0 ? (
                    <Button
                      icon={<ShoppingOutlined />}
                      onClick={e => this.addToCart(item)}
                    />
                  ) : (
                    <Button type="primary" icon={<ShoppingOutlined />} />
                  )
                ]}
              >
                <Meta
                  title={"Rs " + item.price}
                  description={item.description}
                />
              </Card>
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default Items1;

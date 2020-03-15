import React, { Component } from "react";
import myTestData from "./itemCollection1.json";
import { Card, Carousel, Row, Col, Button } from "antd";
import TempCard from "./TempCard.jsx";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import {
  HeartOutlined,
  ShoppingOutlined,
  HeartFilled
} from "@ant-design/icons";

class Items extends Component {
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

    if (this.state.isOpen === true) {
      return (
        <Lightbox
          mainSrc={this.state.imageLightBox[this.state.photoIndex]}
          nextSrc={
            this.state.imageLightBox[
              (this.state.photoIndex + 1) % this.state.imageLightBox.length
            ]
          }
          prevSrc={
            this.state.imageLightBox[
              (this.state.photoIndex + this.state.imageLightBox.length - 1) %
                this.state.imageLightBox.length
            ]
          }
          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() =>
            this.setState({
              photoIndex:
                (this.state.photoIndex + this.state.imageLightBox.length - 1) %
                this.state.imageLightBox.length
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              photoIndex:
                (this.state.photoIndex + 1) % this.state.imageLightBox.length
            })
          }
        />
      );
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
      <Row>
        {filteredItems.map(item => {
          return (
            <Col key={item.id} span={8}>
              <Card
                style={{
                  margin: "15%",
                  // maxHeight: "500px",
                  border: "5px solid green",
                  backgroundColor: "lightgrey"
                }}
                hoverable
                cover={
                  <img
                    onClick={e => this.clickImg(item)}
                    style={{
                      width: "100%",
                      height: "550px",
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
                    // <Icon
                    //   type="heart"
                    //   onClick={e => this.addToWishList(item)}
                    // />
                    <HeartOutlined onClick={e => this.addToWishList(item)} />
                  ) : (
                    // <Icon
                    //   type="heart"
                    //   theme="filled"
                    //   style={{ color: "#1890ff" }}
                    //   onClick={e => this.removeFromWishlist(item)}
                    // />
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

  clickImg = item => {
    console.log(item);
    let images = item.images;
    this.setState({ isOpen: true });
    this.setState({ imageLightBox: images });
  };

  addToWishList = item => {
    this.props.addToWishList(item);
    // console.log(item);
    // let wishListedItemsL = this.state.wishListedItems;
    // wishListedItemsL.push(item);
    // this.setState({ wishListedItems: wishListedItemsL });
  };

  removeFromWishlist = item => {
    this.props.removeFromWishlist(item);
    // console.log(item);
    // let wishListedItemsL = this.state.wishListedItems;
    // wishListedItemsL.pop(item);
    // this.setState({ wishListedItems: wishListedItemsL });
  };

  addToCart = item => {
    this.props.addToCart(item);
    // console.log(item);
    // let addedCartItemsL = this.state.cartItems;
    // addedCartItemsL.push(item);
    // this.setState({ addedCartItems: addedCartItemsL });
  };
}

export default Items;

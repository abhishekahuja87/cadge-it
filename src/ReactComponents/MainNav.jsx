import React, { Component } from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Affix,
  Avatar,
  Badge,
  Row,
  Col,
  Drawer,
  Button,
  Card,
  InputNumber,
  Statistic,
  Form,
  Input,
  Checkbox,
  DatePicker,
  message
} from "antd";
import {
  CrownOutlined,
  EnvironmentOutlined,
  HeartOutlined,
  ShoppingOutlined,
  CloseSquareOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import MainPage from "./MainPage";
import { Redirect } from "react-router";
import emailjs from "emailjs-com";

class MainNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: false,
      showWishlist: false,
      showChildrenDrawer: false,
      totalAmount: 0,
      startDate: ""
    };
  }

  onplaceOrder = e => {
    console.log("place order click");

    var templateParams = {
      to_name: "Neelima",
      from_name: "Abhishek",
      from_email: "abhishek.ahuja87@gmail.com",
      message_html: "Check this out!"
    };

    var sent_to_customer_template = {
      to_name: "asas",
      from_name: "sdadfsadf",
      from_email: "abhishek.ahuja87@gmail.com",
      message_html: "Check this out!"
    };

    // emailjs
    //   .sendForm(
    //     "default_service",
    //     "YOUR_TEMPLATE_ID",
    //     e.target,
    //     "user_vxi82ZFH1k9v1mk8zd6Tm"
    //   )
    //   .then(
    //     result => {
    //       console.log(result.text);
    //     },
    //     error => {
    //       console.log(error.text);
    //     }
    //   );

    emailjs
      .send(
        "default_service",
        "template_JC89zWij",
        templateParams,
        "user_vxi82ZFH1k9v1mk8zd6Tm"
      )
      .then(
        function(response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function(error) {
          console.log("FAILED...", error);
        }
      );

    emailjs
      .send(
        "default_service",
        "sent_to_customer",
        sent_to_customer_template,
        "user_vxi82ZFH1k9v1mk8zd6Tm"
      )
      .then(
        function(response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function(error) {
          console.log("FAILED...", error);
        }
      );
  };

  onFinish = values => {
    let items = this.props.cartItems;
    console.log(this.props.cartItems);

    console.log("Success:", values);

    // this.removeAllFromCart();

    this.setState({ showCart: false, showChildrenDrawer: false });

    console.log("place order click");

    let itemsStr = "";

    items.map(i => {
      itemsStr = itemsStr + i.description + "(id-" + i.id + ")";
      itemsStr = itemsStr + ",";
    });

    let custName = values.name;
    let custEmail = values.email;
    let custContactNo = values.contactno;
    let custAddress = values.user.address;
    let messageToCust = "to be decided";
    let notesFromCust = values.user.notes;
    // let startDate = values["start-date"][0].format("YYYY-MM-DD");

    let ownerName = "CadgeIt";
    let ownerEmail = "cadgeit@gmail.com";

    var send_to_owner_template = {
      to_name: ownerName,
      from_name: custName,
      from_email: custEmail,
      from_contactno: custContactNo,
      address: custAddress,
      message_html: "",
      notes: notesFromCust,
      order_items: itemsStr,
      start_date: this.state.startDate
    };

    var send_to_customer_template = {
      to_name: values.name,
      from_name: values.name,
      from_email: values.email,
      order_items: itemsStr,
      address: custAddress,
      total_amount: this.state.totalAmount,
      message_html: "",
      start_date: this.state.startDate
    };

    emailjs
      .send(
        "default_service",
        "template_JC89zWij",
        send_to_owner_template,
        "user_vxi82ZFH1k9v1mk8zd6Tm"
      )
      .then(
        function(response) {
          // console.log("SUCCESS!", response.status, response.text);
          this.removeAllFromCart();

          message.success(
            "The email with your order details has been sent. You will receive an email for the same with details.",
            10
          );
        },
        function(error) {
          // console.log("FAILED...", error);
          message.error(
            "The order details could not be sent. please try again",
            10
          );
        }
      );

    emailjs
      .send(
        "default_service",
        "sent_to_customer",
        send_to_customer_template,
        "user_vxi82ZFH1k9v1mk8zd6Tm"
      )
      .then(
        function(response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function(error) {
          console.log("FAILED...", error);
        }
      );
  };

  onChange = (date, dateString) => {
    console.log(date, dateString);
    this.setState({ startDate: dateString });
  };

  onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  getPlaceOrderForm = () => {
    console.log("sdsdsd");

    // const { RangePicker } = DatePicker;

    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 }
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 }
    };

    const config = {
      rules: [{ type: "object", required: true }]
    };

    return (
      <div>
        <span> Fill out the details to Place Order...</span>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          // onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Contact No"
            name="contactno"
            rules={[
              { required: true, message: "Please input your Contact Number!" }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item name={["user", "address"]} label="address">
            <Input.TextArea />
          </Form.Item>

          <Form.Item name={["user", "notes"]} label="notes">
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name={["date"]}
            label="date"
            // rules={[{ required: true, message: "Please Select a Date!" }]}
          >
            <DatePicker onChange={this.onChange} />
            <div>End Date will be 3 days from the Start Date</div>
          </Form.Item>

          {/* <Form.Item
            name="range-picker"
            label="RangePicker"
            {...rangeConfig}
            // validateTrigger={this.onNumberChange}
            on
          >
            <RangePicker />
          </Form.Item> */}

          {/* <Form.Item
            name={["date"]}
            label="date"
            // rules={[{ required: true, message: "Please Select a Date!" }]}
          >
            <DatePicker onChange={this.onChange} />
            <div>End Date will be 3 days from the Start Date</div>
          </Form.Item> */}

          {/* <Form.Item
            name="date-picker"
            label="DatePicker"
            rules={[
              {
                type: "array",
                required: true,
                message: "Please input your Start Date!"
              }
            ]}
          >
            <DatePicker />
            <div>End Date will be 3 days from the Start Date</div>
          </Form.Item> */}

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  };

  render() {
    const { Meta } = Card;
    const { SubMenu } = Menu;
    const { Header, Content, Footer, Sider } = Layout;

    if (this.state.showCart === true) {
      let total = 0;
      return (
        <Drawer
          title={"Cart(" + this.props.cartItems.length + ")"}
          width={520}
          placement="right"
          closable={true}
          onClose={this.onCartClose}
          visible={this.state.showCart}
        >
          {/* {this.getItems(this.props.cartItems)} */}
          {this.props.cartItems.map(item => {
            total = total + item.price + item.price * 5;
            return this.getCartViewItem(item);
          })}
          {/* <p>{JSON.stringify(this.props.cartItems)}</p> */}

          <div
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              borderTop: "1px solid #e8e8e8",
              padding: "10px 16px",
              textAlign: "right",
              left: 0,
              background: "#fff",
              borderRadius: "0 0 4px 4px"
            }}
          >
            <span style={{ fontWeight: "bold", marginRight: "20px" }}>
              Total Payable : {total}
            </span>
            <Button
              style={{
                marginRight: 8
              }}
              onClick={this.onClose}
            >
              Cancel
            </Button>
            <Button
              // onClick={this.onplaceOrder}
              onClick={e => this.showOrderPlaceDrawer(total)}
              type="primary"
            >
              Place Order
            </Button>
          </div>

          <Drawer
            title="Two-level Drawer"
            width={320}
            closable={false}
            onClose={this.onOrderPlaceClose}
            visible={this.state.showChildrenDrawer}
          >
            This is two-level drawer
            {this.getPlaceOrderForm()}
          </Drawer>
        </Drawer>
      );
    }

    if (this.state.showWishlist === true) {
      return (
        <Drawer
          title={"Wishlist(" + this.props.wishListedItems.length + ")"}
          width={520}
          placement="right"
          closable={true}
          onClose={this.onWishlistClose}
          visible={this.state.showWishlist}
        >
          {this.props.wishListedItems.map(item => {
            return this.getCartWishlistItem(item);
          })}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              borderTop: "1px solid #e8e8e8",
              padding: "10px 16px",
              textAlign: "right",
              left: 0,
              background: "#fff",
              borderRadius: "0 0 4px 4px"
            }}
          >
            <Button
              style={{
                marginRight: 8
              }}
              onClick={this.onClose}
            >
              Cancel
            </Button>
            <Button onClick={this.onClose} type="primary">
              Submit
            </Button>
          </div>
        </Drawer>
      );
    }

    return (
      <Layout>
        <Affix offsetTop={0}>
          <Header className="header">
            {/* <div className="logo" onClick={this.goToHome} /> */}
            <div className="logo" onClick={this.goToHome}>
              Cadge It
            </div>
            <Menu
              theme="dark"
              mode="horizontal"
              // defaultSelectedKeys={["2"]}
              style={{ lineHeight: "64px", float: "right" }}
            >
              <SubMenu
                title={
                  <span>
                    {/* <Icon type="crown" /> */}
                    <CrownOutlined />
                    Clothes For Her
                  </span>
                }
              >
                <Menu.Item key="cat1opt1" onClick={this.clothes_ethnicWear}>
                  Ethnic Wear
                </Menu.Item>
                <Menu.Item key="cat1opt2" onClick={this.clothes_fusionWear}>
                  Fusion Wear
                </Menu.Item>
                <Menu.Item key="cat1opt3" onClick={this.clothes_westernWear}>
                  Western Wear
                </Menu.Item>
              </SubMenu>
              <SubMenu
                title={
                  <span>
                    {/* <Icon type="environment" /> */}
                    <EnvironmentOutlined />
                    Accessories
                  </span>
                }
              >
                <Menu.Item key="cat2opt1" onClick={this.accessories_clutches}>
                  Clutches
                </Menu.Item>
                <Menu.Item key="cat2opt2" onClick={this.accessories_jewellery}>
                  Jewellery
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="nav-user">
                <Avatar>U</Avatar>
              </Menu.Item>
              <Menu.Item key="2" onClick={this.contactPage}>
                Contact
              </Menu.Item>

              <Menu.Item key="nav-wishlist" onClick={this.showWishlistDrawer}>
                <span style={{ margin: "0px" }}>
                  <Badge count={this.props.wishListedItems.length}>
                    {/* <Icon type="heart" style={{ fontSize: "25px" }} /> */}
                    <HeartOutlined style={{ fontSize: "25px" }} />
                  </Badge>
                </span>
              </Menu.Item>

              <Menu.Item key="nav-cart" onClick={this.showCartDrawer}>
                <span style={{ margin: "0px" }}>
                  <Badge count={this.props.cartItems.length}>
                    {/* <Icon type="shopping" style={{ fontSize: "25px" }} /> */}
                    <ShoppingOutlined style={{ fontSize: "25px" }} />
                  </Badge>
                </span>
              </Menu.Item>
            </Menu>
          </Header>
        </Affix>
      </Layout>
    );
  }

  showCartDrawer = () => {
    this.setState({
      showCart: true
    });
  };

  onCartClose = () => {
    this.setState({
      showCart: false
    });
  };

  showOrderPlaceDrawer = total => {
    this.setState({
      showChildrenDrawer: true,
      totalAmount: total
    });
  };

  onOrderPlaceClose = () => {
    this.setState({
      showChildrenDrawer: false
    });
  };

  showWishlistDrawer = () => {
    this.setState({
      showWishlist: true
    });
  };

  onWishlistClose = () => {
    this.setState({
      showWishlist: false
    });
  };

  contactPage = () => {
    // console.log("about page");
    // return <Redirect to="/about/" />;
    // this.history.pushState(null, "/about/");
    // this.props.history.push("about/");
    // this.context.router.push("/some-path");
    window.location = "/contact";
  };

  clothes_ethnicWear = () => {
    console.log("clothes_ethnicWear");
    window.location = "/items/clothes/ethnicWear";
  };

  clothes_fusionWear = () => {
    console.log("clothes_fusionWear");
    window.location = "/items/clothes/fusionWear";
  };

  clothes_westernWear = () => {
    console.log("clothes_westernWear");
    window.location = "/items/clothes/westernWear";
  };

  accessories_clutches = () => {
    console.log("accessories_clutches");
    window.location = "/items/accessories/clutches";
  };

  accessories_jewellery = () => {
    console.log("accessories_jewellery");
    window.location = "/items/accessories/jewellery";
  };

  goToHome = () => {
    window.location = "/";
  };

  onChange(value) {
    console.log("changed", value);
  }

  getCartViewItem = item => {
    return (
      <React.Fragment>
        <Card
          size="small"
          title={item.description}
          // extra={<a href="#">Link to Item</a>}
          style={{ width: "100%" }}
        >
          <React.Fragment>
            <img
              style={{
                width: "20%",
                height: "80px",
                objectFit: "fit"
              }}
              alt="example"
              // src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              src={item.images[0]}
            />

            <span style={{ fontSize: "15px", marginLeft: "10px" }}>
              Rent: {item.price}, Deposit: {item.price * 5}
            </span>
            <span style={{ fontSize: "15px", marginLeft: "10px" }}> =</span>
            <span
              style={{
                fontSize: "15px",
                marginLeft: "10px",
                fontWeight: "bold"
              }}
            >
              Rs {item.price + item.price * 5}
            </span>
            <Button
              onClick={e => this.removeFromCart(item)}
              type="primary"
              // shape="circle"
              icon={<CloseSquareOutlined />}
              style={{ marginLeft: "20px" }}
            />
          </React.Fragment>
        </Card>
        <br />
      </React.Fragment>
    );
  };

  getCartWishlistItem = item => {
    return (
      <React.Fragment>
        <Card
          size="small"
          title={item.description}
          extra={<a href="#">Link to Item</a>}
          style={{ width: "100%" }}
        >
          <React.Fragment>
            <img
              style={{
                width: "20%",
                height: "80px",
                objectFit: "fit"
              }}
              alt="example"
              // src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              src={item.images[0]}
            />

            <span style={{ fontSize: "15px", marginLeft: "10px" }}>
              Rent: {item.price}, Deposit: {item.price * 5}
            </span>
            <span style={{ fontSize: "15px", marginLeft: "10px" }}> =</span>
            <span
              style={{
                fontSize: "15px",
                marginLeft: "10px",
                fontWeight: "bold"
              }}
            >
              Rs {item.price + item.price * 5}
            </span>
            <Button
              onClick={e => this.removeFromWishlist(item)}
              type="primary"
              // shape="circle"
              // icon="close-square"
              icon={<CloseSquareOutlined />}
              style={{ marginLeft: "20px" }}
            />
          </React.Fragment>
        </Card>
        <br />
      </React.Fragment>
    );
  };

  removeFromCart = item => {
    console.log(item);
    this.props.removeFromCart(item);
  };

  removeAllFromCart = () => {
    let a = this.props.cartItems;
    // console.log(a);
    // console.log(a[1]);
    // console.log(a[0]);
    // a.map(i => {
    //   console.log("-----item------");
    //   console.log(i);
    //   this.removeFromCart(i);
    //   console.log("========item======");
    // });
    this.props.removeAllFromCart();
  };

  removeFromWishlist = item => {
    console.log(item);
    this.props.removeFromWishlist(item);
  };
}

export default MainNav;

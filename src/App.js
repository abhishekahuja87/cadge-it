import React, { Component } from "react";
import HeaderAndSider from "./ReactComponents/HeaderAndSider";
import {
  Layout,
  Affix,
  Menu,
  Breadcrumb,
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
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  CrownOutlined,
  EnvironmentOutlined,
  PieChartOutlined,
  DesktopOutlined,
  TeamOutlined,
  FileOutlined,
  ShoppingOutlined
} from "@ant-design/icons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HeaderAndSider
        wishListedItems={this.state.wishListedItems}
        cartItems={this.state.cartItems}
        removeFromCart={this.removeFromCart}
        removeFromWishlist={this.removeFromWishlist}
        removeAllFromCart={this.removeAllFromCart}
      />
    );
  }
}

export default App;

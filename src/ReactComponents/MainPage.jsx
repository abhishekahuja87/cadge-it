import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon, Row, Col, Alert } from "antd";
import MainNav from "./MainNav";
import MyCarousel from "./MyCarousel";
import MyTimeline from "./MyTimeline";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const style = { background: "#0092ff", padding: "8px 0" };
    const { SubMenu } = Menu;
    const { Header, Content, Footer } = Layout;
    return (
      <div>
        <Content
          style={{
            // backgroundColor: "green",
            margin: "5px"
          }}
        >
          <MyCarousel />
          <div
            style={{
              textAlign: "center",
              height: "85vh",
              backgroundColor: "white"
            }}
          >
            <div
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                padding: "20px 0px 20px 0px"
              }}
            >
              How it Works
            </div>

            <span>
              <MyTimeline />
            </span>

            <div>
              <Alert
                style={{ width: "50%", margin: "auto", marginTop: "40px" }}
                message="Important Note"
                description="We take Security Deposit to avoid any damage or theft of the product, please use the product as your own to make hassle free Deposit Refund"
                type="info"
                showIcon
              />
            </div>
          </div>
        </Content>
      </div>
    );
  }
}

export default MainPage;

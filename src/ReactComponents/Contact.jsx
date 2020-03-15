import React, { Component } from "react";
import { Card } from "antd";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Card
          title="Contact Us"
          style={{
            width: 300,
            margin: "auto",
            marginTop: "30px"
          }}
        >
          <p>For any queries, Contact us at </p>{" "}
          <p style={{ fontWeight: "bold" }}>cadgeit@gmail.com</p>
        </Card>
      </div>
    );
  }
}

export default Contact;

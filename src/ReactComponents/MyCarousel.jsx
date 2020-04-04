import React, { Component } from "react";
import { Carousel } from "antd";

class MyCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Carousel
        autoplay
        fade={true}
        //   afterChange={onChange}
      >
        <div>
          <span>
            <img
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "100%",
                height: "70vh",
                objectFit: "cover"
              }}
              src={"https://i.picsum.photos/id/419/800/300.jpg"}
            ></img>
          </span>
        </div>
        <div>
          <span>
            <img
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "100%",
                height: "70vh",
                objectFit: "cover"
              }}
              src={"https://i.picsum.photos/id/420/800/300.jpg"}
            ></img>
          </span>
        </div>
        <div>
          <span>
            <img
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "100%",
                height: "70vh",
                objectFit: "cover"
              }}
              src={"https://i.picsum.photos/id/421/800/300.jpg"}
            ></img>
          </span>
        </div>
        <div>
          <span>
            <img
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "100%",
                height: "70vh",
                objectFit: "cover"
              }}
              src={"https://i.picsum.photos/id/423/800/300.jpg"}
            ></img>
          </span>
        </div>
      </Carousel>
    );
  }
}

export default MyCarousel;

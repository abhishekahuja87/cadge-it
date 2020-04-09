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
              src={
                "https://drive.google.com/uc?export=view&id=1l85xA_e_uYUbehD-TtDMmlMpBQG8rXx0"
              }
              alt=""
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
              src={
                "https://drive.google.com/uc?export=view&id=1YH3BFqH1rfhsMUvx-LNkTAEsL9vHYVHN"
              }
              alt=""
            ></img>
          </span>
        </div>
        {/* <div>
          <span>
            <img
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "100%",
                height: "70vh",
                objectFit: "fit"
              }}
              src={"https://i.picsum.photos/id/421/800/300.jpg"}
              alt=""
            ></img>
          </span>
        </div> */}
        {/* <div>
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
              alt=""
            ></img>
          </span>
        </div> */}
      </Carousel>
    );
  }
}

export default MyCarousel;

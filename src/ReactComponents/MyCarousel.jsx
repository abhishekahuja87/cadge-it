import React, { Component } from "react";
import { Carousel } from "antd";

class MyCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // working edited
  // "https://drive.google.com/uc?export=view&id=1l85xA_e_uYUbehD-TtDMmlMpBQG8rXx0"
  // "https://drive.google.com/uc?export=view&id=1YH3BFqH1rfhsMUvx-LNkTAEsL9vHYVHN"
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
                "https://drive.google.com/uc?export=view&id=1tCjSpuTub_CLYo06m4e5dDe8vUEdl0qU"
              }
              alt=""
            ></img>
            <span
              style={{
                background: "rgba(0, 0, 0, 0.8)",
                position: "absolute",
                bottom: window.innerWidth > 600 ? "30%" : "35%",
                right: window.innerWidth > 600 ? "28%" : "9%",
                // backgroundColor: "black",
                color: "white",
                paddingLeft: "5%",
                paddingRight: "5%"
              }}
            >
              <p
                style={{
                  marginBottom: "10px",
                  color: "lightYellow",
                  fontSize: window.innerWidth > 600 ? "40px" : "20px"
                }}
              >
                Want to Dress differently Today?
              </p>
              <p
                style={{
                  marginBottom: "10px",
                  marginLeft: "20%",
                  marginRight: "20%",
                  color: "lightYellow",
                  fontSize: window.innerWidth > 600 ? "35px" : "30px"
                }}
              >
                {"Rent it out here!"}
              </p>
            </span>
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
                "https://drive.google.com/uc?export=view&id=1EIIAno_ny3wHTWVhlCym8fwZgmYHsAe8"
              }
              alt=""
            ></img>
            <span
              style={{
                background: "rgba(0, 0, 0, 0.8)",
                position: "absolute",
                bottom: window.innerWidth > 600 ? "30%" : "35%",
                right: window.innerWidth > 600 ? "30%" : "17%",
                // backgroundColor: "black",
                color: "white",
                paddingLeft: "5%",
                paddingRight: "5%"
              }}
            >
              <p
                style={{
                  marginBottom: "10px",
                  color: "lightYellow",
                  fontSize: window.innerWidth > 600 ? "40px" : "16px"
                }}
              >
                Bored of your Collection??
              </p>
              <p
                style={{
                  marginBottom: "10px",
                  marginLeft: "20%",
                  marginRight: "20%",
                  color: "lightYellow",
                  fontSize: window.innerWidth > 600 ? "35px" : "30px"
                }}
              >
                {"Rent it from us!"}
              </p>
            </span>
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

import React, { Component } from "react";
import "./TempCard.css";
import { Card, Carousel, Row, Col } from "antd";

class TempCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="main">
        <h1>Responsive Card Grid Layout</h1>
        <ul class="cards">
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
                <img src="https://picsum.photos/500/300/?image=10"></img>
                <div class="card_content">
                  <h2 class="card_title">Card Grid Layout</h2>
                  <p class="card_text">
                    Demo of pixel perfect pure CSS simple responsive card grid
                    layout
                  </p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </div>
          </li>
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
                <img src="https://picsum.photos/500/300/?image=5"></img>
                <div class="card_content">
                  <h2 class="card_title">Card Grid Layout</h2>
                  <p class="card_text">
                    Demo of pixel perfect pure CSS simple responsive card grid
                    layout
                  </p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </div>
          </li>
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
                <img src="https://picsum.photos/500/300/?image=11"></img>
                <div class="card_content">
                  <h2 class="card_title">Card Grid Layout</h2>
                  <p class="card_text">
                    Demo of pixel perfect pure CSS simple responsive card grid
                    layout
                  </p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </div>
          </li>
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
                <img src="https://picsum.photos/500/300/?image=14"></img>
                <div class="card_content">
                  <h2 class="card_title">Card Grid Layout</h2>
                  <p class="card_text">
                    Demo of pixel perfect pure CSS simple responsive card grid
                    layout
                  </p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </div>
          </li>
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
                {/* <img src="https://picsum.photos/500/300/?image=17"></img> */}

                <Carousel autoplay>
                  <div>
                    {/* <h3> */}
                    <img
                      class="card_image"
                      style={{ objectFit: "cover" }}
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                      // height="600px"
                      // width="500px"
                    />
                    {/* </h3> */}
                  </div>
                  <div>
                    {/* <h3> */}
                    <img
                      class="card_image"
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                      // height="600px"
                      // width="500px"
                    />
                    {/* </h3> */}
                  </div>
                </Carousel>

                <div class="card_content">
                  <h2 class="card_title">Card Grid Layout</h2>
                  <p class="card_text">
                    Demo of pixel perfect pure CSS simple responsive card grid
                    layout
                  </p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </div>
          </li>
          <li class="cards_item">
            <div class="card">
              <div class="card_image">
                <img src="https://picsum.photos/500/300/?image=2"></img>
                <div class="card_content">
                  <h2 class="card_title">Card Grid Layout</h2>
                  <p class="card_text">
                    Demo of pixel perfect pure CSS simple responsive card grid
                    layout
                  </p>
                  <button class="btn card_btn">Read More</button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      //   <h3 class="made_by">Made with ♡</h3>
    );
  }
}

export default TempCard;

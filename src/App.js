import React, { Component } from "react";
import HeaderAndSider from "./ReactComponents/HeaderAndSider";

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

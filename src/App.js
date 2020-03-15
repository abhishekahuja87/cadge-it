import React, { Component } from "react";
import MainPage from "./ReactComponents/MainPage";
import MainNav from "./ReactComponents/MainNav";
import Contact from "./ReactComponents/Contact";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  HashRouter
} from "react-router-dom";
import Items from "./ReactComponents/Items";
import { message } from "antd";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wishListedItems:
        JSON.parse(localStorage.getItem("allWishListedItems")) || [],
      cartItems: JSON.parse(localStorage.getItem("allCartItems1")) || []
    };
  }

  render() {
    // console.log(window.location.search);
    console.log(this.state.wishListedItems);
    // return <h2>sdsdsd</h2>;
    return (
      <div>
        <MainNav
          wishListedItems={this.state.wishListedItems}
          cartItems={this.state.cartItems}
          removeFromCart={this.removeFromCart}
          removeFromWishlist={this.removeFromWishlist}
          removeAllFromCart={this.removeAllFromCart}
        />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          {/* <HashRouter basename="/"> */}
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/contact" component={Contact} />
            <Route
              path="/items/:category/:subCategory"
              // component={Items}
              render={props => (
                <Items
                  {...props}
                  isAuthed="propIpassed"
                  wishListedItems={this.state.wishListedItems}
                  cartItems={this.state.cartItems}
                  addToWishList={this.addToWishList}
                  removeFromWishlist={this.removeFromWishlist}
                  addToCart={this.addToCart}
                />
              )}
            />

            {/* <Route path="/products/:id" component={ProductDetails} />
            <Route
              path="/products"
              render={props => <Products sortBy="newest" {...props} />}
            />
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Redirect from="/messages" to="/posts" />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" /> */}
          </Switch>
        </BrowserRouter>
        {/* </HashRouter> */}
      </div>
    );
  }

  addToWishList = item => {
    message.info("Added to Wishlist");
    console.log(item);
    let wishListedItemsL = this.state.wishListedItems;
    wishListedItemsL.push(item);
    this.setState({ wishListedItems: wishListedItemsL });

    //store to local storage
    localStorage.setItem(
      "allWishListedItems",
      JSON.stringify(this.state.wishListedItems)
    );
  };

  // removeFromWishList = item => {
  //   console.log(item);
  //   let wishListedItemsL = this.state.wishListedItems;
  //   wishListedItemsL.pop(item);
  //   this.setState({ wishListedItems: wishListedItemsL });

  //   //store to local storage
  //   localStorage.setItem(
  //     "allWishListedItems",
  //     JSON.stringify(this.state.wishListedItems)
  //   );
  // };

  addToCart = item => {
    message.info("Added to Cart");
    console.log(item);
    let cartItemsL = this.state.cartItems;
    cartItemsL.push(item);
    this.setState({ cartItems: cartItemsL });

    //store to local storage
    localStorage.setItem("allCartItems1", JSON.stringify(this.state.cartItems));
  };

  removeAllFromCart = () => {
    // message.info("Removed All");
    // console.log(item);
    // let cartItemsL = this.state.cartItems;
    // cartItemsL.forEach(item=>{
    //   cartItemsL.p
    // })
    // cartItemsL.pop(item);
    let a = [];
    this.setState({ cartItems: a });

    //store to local storage
    localStorage.setItem("allCartItems1", JSON.stringify(a));
  };

  removeFromCart = item => {
    message.info("Removed from cart");
    console.log(item);
    let cartItemsL = this.state.cartItems;
    cartItemsL.pop(item);
    this.setState({ cartItems: cartItemsL });

    //store to local storage
    localStorage.setItem("allCartItems1", JSON.stringify(this.state.cartItems));
  };

  removeFromWishlist = item => {
    message.info("Removed from wishlist");
    console.log(item);
    let wishListedItemsL = this.state.wishListedItems;
    wishListedItemsL.pop(item);
    this.setState({ wishListedItems: wishListedItemsL });

    //store to local storage
    localStorage.setItem(
      "allWishListedItems",
      JSON.stringify(this.state.wishListedItems)
    );
  };
}

export default App;

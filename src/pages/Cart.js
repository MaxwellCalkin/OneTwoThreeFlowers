import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../actions";
import CartItem from "../components/CartItem";
import { Card, CardContent, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";

class Cart extends Component {
  render() {
    const { cartIds, products, removeFromCart } = this.props;

    return (
      <div>
        <h1>Shopping Cart</h1>
        <Stack spacing={2}>
          {cartIds.map((id) => (
            <Link
              to={`/product/${id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card key={id}>
                <CardContent>
                  <CartItem
                    item={products.find((product) => product.id == id)}
                    removeFromCart={removeFromCart}
                    quantity={this.props.cart[id]}
                  />
                </CardContent>
              </Card>
            </Link>
          ))}
        </Stack>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  cartIds: Object.keys(state.cart),
  products: state.products.products,
});

const mapDispatchToProps = {
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

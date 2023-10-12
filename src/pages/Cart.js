import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../actions";
import CartItem from "../components/CartItem";

class Cart extends Component {
  render() {
    const { cartIds, products, removeFromCart } = this.props;

    return (
      <div>
        <h1>Shopping Cart</h1>
        <ul>
          {cartIds.map((id) => (
            <CartItem
              key={id}
              item={products.find((product) => {
                console.log(product.id, "id", id);
                return product.id == id;
              })}
              removeFromCart={removeFromCart}
              quantity={this.props.cart[id]}
            />
          ))}
        </ul>
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

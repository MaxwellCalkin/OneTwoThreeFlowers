import React, { Component } from "react";

class ProductPage extends Component {
  render() {
    const { product } = this.props;

    return (
      <div>
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />
        <div>{product.description}</div>
        <div>{product.price}</div>
        {/* Add to Cart button */}
      </div>
    );
  }
}

export default ProductPage;

import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions";
import ProductCard from "../components/ProductCard";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import ProductPage from "./ProductPage"; // Import the ProductPage component

class ProductList extends Component {
  render() {
    const { products } = this.props;

    return (
      <Grid container spacing={2}>
        {products.map((product) => {
          console.log("ProductList map", product.id);
          return (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={product} addToCart={addToCart} />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products,
});

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { connect } from "react-redux";
import { addToCart } from "../actions";
import { Link } from "react-router-dom";

class ProductCard extends React.Component {
  render() {
    const { product, addToCart } = this.props;

    return (
      <Card>
        <Link
          to={`/product/${product.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <CardMedia
            component="img"
            alt={product.name}
            height="140"
            image={product.image}
          />
        </Link>
        <CardContent>
          <Link
            to={`/product/${product.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography variant="h6" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {product.description}
            </Typography>
            <Typography variant="h6" color="textPrimary">
              ${product.price}
            </Typography>
          </Link>
          <Button
            variant="contained"
            color="primary"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    );
  }
}

const mapDispatchToProps = {
  addToCart,
};

export default connect(null, mapDispatchToProps)(ProductCard);

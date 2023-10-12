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

class ProductCard extends React.Component {
  render() {
    const { product, addToCart } = this.props;

    return (
      <Card>
        <CardMedia
          component="img"
          alt={product.name}
          height="140"
          image={product.image}
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {product.description}
          </Typography>
          <Typography variant="h6" color="textPrimary">
            ${product.price}
          </Typography>
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

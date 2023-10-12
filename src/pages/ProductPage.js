import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Paper,
} from "@mui/material";

const styles = {
  productImage: {
    width: "100%",
    maxHeight: "400px",
    objectFit: "contain",
  },
  productInfo: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    height: "100%",
    backgroundColor: "whitesmoke",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    marginBottom: "20px",
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingRight: "20px",
    paddingLeft: "20px",
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
  description: {
    marginBottom: "20px",
  },
  price: {
    fontWeight: "bold",
    fontSize: "24px",
    marginBottom: "20px",
  },
};

class ProductPage extends Component {
  render() {
    const { product, addToCart } = this.props;

    if (!product) {
      return (
        <div>
          Product not found. <Link to="/">Back to Product List</Link>
        </div>
      );
    }

    return (
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                alt={product.name}
                height="400"
                image={product.image}
                style={styles.productImage}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={styles.productInfo}>
              <Typography variant="h4" component="h1">
                {product.name}
              </Typography>
              <Typography
                variant="h6"
                color="textSecondary"
                style={styles.description}
              >
                {product.description}
              </Typography>
              <Typography variant="h6" style={styles.price}>
                Price: ${product.price}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </Button>
              <Link to="/">Back to Product List</Link>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = window.location.href.split("/")[4];
  const product = state.products.products.find((p) => p.id === Number(id));

  return {
    product,
  };
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);

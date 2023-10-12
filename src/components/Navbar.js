// Navbar.js
import React, { Component } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppBar, Toolbar, Typography, Badge } from "@mui/material";
import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    const { cartItemCount } = this.props;
    console.log(cartItemCount);
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            My Flower Shop
          </Typography>
          <div style={{ flexGrow: 1 }}></div>
          <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
            <Badge badgeContent={cartItemCount} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItemCount: Object.values(state.cart).reduce((sum, num) => sum + num, 0),
});

export default connect(mapStateToProps)(Navbar);

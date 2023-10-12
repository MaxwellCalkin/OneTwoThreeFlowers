import React, { Component } from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Avatar,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

class CartItem extends Component {
  render() {
    const { item, quantity, removeFromCart } = this.props;

    return (
      <ListItem>
        <Link
          to={`/product/${item.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Avatar
            alt={item.name}
            src={item.image}
            sx={{ mr: 3, width: 100, height: 100 }}
          />
        </Link>
        <Link
          to={`/product/${item.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItemText
            primary={
              <>
                {item.name}
                <Typography variant="body2" color="textSecondary">
                  {item.description}
                </Typography>
              </>
            }
            secondary={
              <>
                <Typography variant="body2" color="textSecondary">
                  Price: ${item.price}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Quantity: {quantity}
                </Typography>
              </>
            }
          />
        </Link>
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => removeFromCart(item.id)}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export default CartItem;

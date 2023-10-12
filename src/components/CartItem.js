import React, { Component } from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

class CartItem extends Component {
  render() {
    const { item, quantity, removeFromCart } = this.props;

    return (
      <ListItem>
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

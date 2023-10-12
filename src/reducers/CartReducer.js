import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions";

const initialState = {};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const productId = action.payload.id;

      if (state[productId]) {
        // Product already exists in the cart, increment the quantity
        return {
          ...state,
          [productId]: state[productId] + 1,
        };
      } else {
        // Product is not in the cart, add it with a quantity of 1
        return {
          ...state,
          [productId]: 1,
        };
      }
    case REMOVE_FROM_CART:
      const newState = { ...state };
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
};

export default cartReducer;

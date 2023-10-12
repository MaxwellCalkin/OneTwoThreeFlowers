// rootReducer.js
import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import ProductsReducer from "./ProductsReducer";

const RootReducer = combineReducers({
  cart: CartReducer,
  products: ProductsReducer,
});

export default RootReducer;

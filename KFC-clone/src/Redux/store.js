import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./Products/procucts.reducer";
import { authReducer } from "./Auth/auth.reducer";
import { cartReducer } from "./cartRedux/cart.Reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  auth: authReducer,
  cart: cartReducer,
});

export const store = legacy_createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
);

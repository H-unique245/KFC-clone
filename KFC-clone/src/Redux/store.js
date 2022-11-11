import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./Products/procucts.reducer";
import { authReducer, OtpVerifier, SignupReducer } from "./Auth/auth.reducer";
// import { authReducer } from "./Auth/auth.reducer";
import { cartReducer } from "./cartRedux/cart.Reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  auth: authReducer,
  otpVerify: OtpVerifier,
  signup: SignupReducer,
});

export const store = legacy_createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
);

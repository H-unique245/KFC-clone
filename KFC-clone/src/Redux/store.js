import {legacy_createStore,combineReducers,compose, applyMiddleware} from "redux"
import thunk from "redux-thunk";
import { productsReducer } from "./Products/procucts.reducer";
import { authReducer, OtpVerifier } from "./Auth/auth.reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  auth: authReducer,
  otpVerify: OtpVerifier});


export const store= legacy_createStore(rootReducer,compose(applyMiddleware(thunk)));
import {legacy_createStore,combineReducers,compose, applyMiddleware} from "redux"
import thunk from "redux-thunk";
import { productsReducer } from "./Products/procucts.reducer";
import { authReducer } from "./Auth/auth.reducer";

const rootReducer = combineReducers({products:productsReducer,auth:authReducer});


export const store= legacy_createStore(rootReducer,compose(applyMiddleware(thunk)));
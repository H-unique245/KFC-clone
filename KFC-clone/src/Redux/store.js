import {legacy_createStore,combineReducers,compose, applyMiddleware} from "redux"
import thunk from "redux-thunk";
import { productsReducer } from "./Products/procucts.reducer";

const rootReducer = combineReducers({products:productsReducer});


export const store= legacy_createStore(rootReducer,compose(applyMiddleware(thunk)));
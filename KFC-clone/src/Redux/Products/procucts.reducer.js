import { GET_PRODUCTS_BEVERAGE, GET_PRODUCTS_BOXMEAL, GET_PRODUCTS_BURGER, GET_PRODUCTS_CHICKEN, GET_PRODUCTS_CHICKENROLL, GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_NEWLAUNCH, GET_PRODUCTS_SNACKS, GET_PRODUCTS_STAYHOME, GET_PRODUCTS_SUCCESS } from "./products.actionTypes";

 const productState = {
    products: [],
    chicken:[],
    launch:[],
    chicken_roll:[],
    boxMeal:[],
    burger:[],
    stayHome:[],
    snacks:[],
    beverage:[],
    error: true,
    loading: false,
 }
export const productsReducer = (state = productState, {type,payload}) => {
  switch (type) {
    case GET_PRODUCTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        products: payload,
      };
      case GET_PRODUCTS_CHICKEN:
      return{
        ...state,
        chicken:payload,
        loading:false
      };
      case GET_PRODUCTS_NEWLAUNCH:
      return{
        ...state,
        launch:payload,
        loading:false
      };
      case GET_PRODUCTS_CHICKENROLL:
      return{
        ...state,
        chicken_roll:payload,
        loading:false
      };
      case GET_PRODUCTS_BOXMEAL:
      return{
        ...state,
        boxMeal:payload,
        loading:false
      };
      case GET_PRODUCTS_BURGER:
      return{
        ...state,
        burger:payload,
        loading:false
      };
      case GET_PRODUCTS_STAYHOME:
      return{
        ...state,
        stayHome:payload,
        loading:false
      };
      case GET_PRODUCTS_SNACKS:
      return{
        ...state,
        snacks:payload,
        loading:false
      };
      case GET_PRODUCTS_BEVERAGE:
      return{
        ...state,
        beverage:payload,
        loading:false
      };
    default:
      return state;
  }
}

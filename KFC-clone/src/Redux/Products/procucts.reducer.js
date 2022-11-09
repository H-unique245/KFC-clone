import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from "./products.actionTypes";

 const productState = {
    products: [],
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
    default:
      return state;
  }
}

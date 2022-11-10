import axios from "axios";
import {
  GET_CART_ITEMS_ERROR,
  GET_CART_ITEMS_LOADING,
  GET_CART_ITEMS_SUCCESS,
  ADD_ITEM_TO_CART_SUCCESS,
  ADD_ITEM_TO_CART_ERROR,
  ADD_ITEM_TO_CART_LOADING,
  UPDATE_CART_ITEMS_SUCCESS,
  UPDATE_CART_ITEMS_LOADING,
  UPDATE_CART_ITEMS_ERROR,
  REMOVE_CART_ITEMS_SUCCESS,
} from "./cart.actionType";
export const getcartItem = () => async (dispatch) => {
  dispatch({ type: GET_CART_ITEMS_LOADING });
  try {
    let res = await axios.get("https://reqres.in/api/users");
    return dispatch({
      type: GET_CART_ITEMS_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({ type: GET_CART_ITEMS_ERROR });
  }
};
export const addToCart =
  ({ id, img, tital, cata }) =>
  async (dispatch) => {
    dispatch({ type: ADD_ITEM_TO_CART_LOADING });
    try {
      let res = await axios.post("https://reqres.in/api/users", {
        id,
        img,
        tital,
        cata,
      });
      return dispatch({
        type: ADD_ITEM_TO_CART_SUCCESS,
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({ type: ADD_ITEM_TO_CART_ERROR });
    }
  };
export const deleteItem = (id) => async (dispatch) => {
  let res = await axios.delete(`https://reqres.in/api/users/${id}`);
  console.log(res);
  return dispatch({
    type: REMOVE_CART_ITEMS_SUCCESS,
  });
};
export const updateQty = (id) => async (dispatch) => {
  dispatch({ type: UPDATE_CART_ITEMS_LOADING });
  try {
    let res = await axios.delete(`https://reqres.in/api/users/${id}`, {
      first_name: "king",
    });
    console.log(res);
    return dispatch({
      type: UPDATE_CART_ITEMS_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({ type: UPDATE_CART_ITEMS_ERROR });
  }
};

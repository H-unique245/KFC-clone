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
  REMOVE_CART_ITEMS_LOADING,
  REMOVE_CART_ITEMS_ERROR,
  COUNTER_UPDATEINC,
  COUNTER_UPDATEDEC,
  SETPRICE,
} from "./cart.actionType";
import {GET_LOCAL} from "../../utils/localData"

const token=GET_LOCAL("id")
export const getcartItem = () => async (dispatch) => {
  dispatch({ type: GET_CART_ITEMS_LOADING });
  try {
    let res = await axios.get("https://pleasant-newt-twill.cyclic.app/carts", {
      headers: { Authorization: token },
    });
    return dispatch({
      type: GET_CART_ITEMS_SUCCESS,
      payload: res.data.Items,
    });
  } catch (error) {
    dispatch({ type: GET_CART_ITEMS_ERROR });
  }
};
export const addToCart =
  ({ image, id, title, cata, qty, price },token) =>
    async (dispatch) => {
    // console.log(token,image)
    // console.log(image, id, title, price);
    dispatch({ type: ADD_ITEM_TO_CART_LOADING });
    try {
      let res = await axios.post(
        "https://pleasant-newt-twill.cyclic.app/carts/add",
        { image, title, qty, cata, price },
        {
          headers: { Authorization: token },
        }
      );
      return dispatch({
        type: ADD_ITEM_TO_CART_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({ type: ADD_ITEM_TO_CART_ERROR });
    }
  };
export const deleteItem = (id) => async (dispatch) => {
  dispatch({ type: REMOVE_CART_ITEMS_LOADING });
  console.log(id)
  try {
    let res = await axios.delete(
      `https://pleasant-newt-twill.cyclic.app/carts/${id}`,
      {
        headers: { authorization: token },
      }
    );

    return dispatch({
      type: REMOVE_CART_ITEMS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({ type: REMOVE_CART_ITEMS_ERROR });
  }
};

export const updateQty =
  (data,quant) =>
  async (dispatch) => {
    dispatch({ type: UPDATE_CART_ITEMS_LOADING });
    // console.log("DATA",data)
    try {
      let res = await axios.patch(
        `https://pleasant-newt-twill.cyclic.app/carts/${data._id}`,
        { qty:data.qty+ quant  },
        {
          headers: { authorization: token },
        }
        );
        console.log("response",res.data)
        console.log("quantity check",data.qty)
        return dispatch({
          type: UPDATE_CART_ITEMS_SUCCESS,
          payload: res.data,
        });
    } catch (error) {
      console.log(error);
      dispatch({ type: UPDATE_CART_ITEMS_ERROR });
    }
  };
export const updateInc = (payload) => ({
  type: COUNTER_UPDATEINC,
  payload,
});
export const updateDec = (payload) => ({
  type: COUNTER_UPDATEDEC,
  payload,
});
export const priceSet = (payload) => ({
  type: SETPRICE,
  payload,
});

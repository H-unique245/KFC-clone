import {
  ADD_ITEM_TO_CART_SUCCESS,
  GET_CART_ITEMS_SUCCESS,
  REMOVE_CART_ITEMS_SUCCESS,
  UPDATE_CART_ITEMS_SUCCESS,
} from "./cart.actionType";

// Note: Do not update/change the initial state
const cartInitalState = {
  loading: false,
  error: false,
  data: [],
};
export const cartReducer = (state = cartInitalState, { type, payload }) => {
  switch (type) {
    case GET_CART_ITEMS_SUCCESS: {
      return {
        ...state,
        data: payload,
      };
    }
    case ADD_ITEM_TO_CART_SUCCESS: {
      return {
        ...state,
        data: payload,
      };
    }
    case REMOVE_CART_ITEMS_SUCCESS: {
      return {
        ...state,
      };
    }
    case UPDATE_CART_ITEMS_SUCCESS: {
      return {
        ...state,
        data: payload,
      };
    }
    default: {
      return state;
    }
  }
};

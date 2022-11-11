import {
  ADD_ITEM_TO_CART_ERROR,
  ADD_ITEM_TO_CART_LOADING,
  ADD_ITEM_TO_CART_SUCCESS,
  COUNTER_UPDATEINC,
  COUNTER_UPDATEDEC,
  GET_CART_ITEMS_ERROR,
  GET_CART_ITEMS_LOADING,
  GET_CART_ITEMS_SUCCESS,
  REMOVE_CART_ITEMS_ERROR,
  REMOVE_CART_ITEMS_LOADING,
  REMOVE_CART_ITEMS_SUCCESS,
  UPDATE_CART_ITEMS_ERROR,
  UPDATE_CART_ITEMS_LOADING,
  UPDATE_CART_ITEMS_SUCCESS,
} from "./cart.actionType";

// Note: Do not update/change the initial state
const cartInitalState = {
  loading: false,
  error: false,
  data: [],
};
export const cartReducer = (
  state = cartInitalState,
  { type, payload }
) => {
  switch (type) {
    case GET_CART_ITEMS_SUCCESS: {
      return {
        ...state,
        data: payload,
        loading: false,
        error: false,
      };
    }
    case ADD_ITEM_TO_CART_SUCCESS: {
      return {
        ...state,
        data: payload,
        loading: false,
        error: false,
      };
    }
    case REMOVE_CART_ITEMS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case UPDATE_CART_ITEMS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case UPDATE_CART_ITEMS_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case REMOVE_CART_ITEMS_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_CART_ITEMS_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case ADD_ITEM_TO_CART_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case ADD_ITEM_TO_CART_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_CART_ITEMS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case UPDATE_CART_ITEMS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case REMOVE_CART_ITEMS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case COUNTER_UPDATEINC: {
      const id = payload;

      const updateQty = state.data.map((el) => {
        if (el.id * 1 === id * 1) {
          return {
            ...el,
            qty: el.qty + 1,
          };
        } else {
          return el;
        }
      });

      return {
        ...state,
        data: updateQty,
      };
    }
    case COUNTER_UPDATEDEC: {
      const id = payload;

      const updateQty = state.data.map((el) => {
        if (el.id * 1 === id * 1) {
          return {
            ...el,
            qty: el.qty - 1,
          };
        } else {
          return el;
        }
      });

      return {
        ...state,
        data: updateQty,
      };
    }
    default: {
      return state;
    }
  }
};

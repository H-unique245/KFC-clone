import {
  AUTH_REQ_LOADING,
  AUTH_REQ_SUCCESS,
  AUTH_REQ_ERROR,
    AUTH_REQ_LOGOUT
} from "./auth.type";



export const authLoading = () => {
    return {
      type: AUTH_REQ_LOADING,
    };
}
export const authSuccess = (data) => {
  return {
    type: AUTH_REQ_SUCCESS,
    payload: data,
  };
};
export const authError = (data) => {
  return {
    type: AUTH_REQ_ERROR,
    paylaod: data,
  };
};
export const authLogout = () => {
  return {
    type: AUTH_REQ_LOGOUT,
  };
};
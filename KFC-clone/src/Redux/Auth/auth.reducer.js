import { AUTH_REQ_ERROR, AUTH_REQ_LOADING, AUTH_REQ_LOGOUT, AUTH_REQ_SUCCESS } from "./auth.type";


const intialState = {
    isAuth: false,
    loading: false,
    error: "",
    name:""
}

export const authReducer = (state=intialState, action) => {
    
    switch (action.type) {
      case AUTH_REQ_LOADING: {
            return {
                ...state,
                loading:true,
                
        };
      }
      case AUTH_REQ_SUCCESS: {
            return {
              ...state,
              isAuth: true,
              loading: false,
              error: "",
              name: action.payload,
            };
      }
      case AUTH_REQ_ERROR: {
            return {
              ...state,
              isAuth: false,
              loading: false,
              error: action.payload,
              name: "",
            };
      }
      case AUTH_REQ_LOGOUT: {
            return {
              ...state,
              isAuth: false,
              loading: false,
              error: "",
              name: "",
            };
      }

      default: {
        return state;
      }
    }
    



}
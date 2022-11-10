import {
  AUTH_REQ_ERROR,
  AUTH_REQ_LOADING,
  AUTH_REQ_LOGOUT,
  AUTH_REQ_SUCCESS,
  AUTH_LOGIN_REQ,
  AUTH_LOGIN_REQ_ERROR,
  AUTH_LOGIN_LOADING,
} from "./auth.type";


const intialState = {
    isAuth: false,
    loading: false,
    error: "",
    number:""
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

const file = {
  loading2: false,
  token:""
}

export const OtpVerifier = (state=file, action) => {
  switch (action.type) {
    case AUTH_LOGIN_LOADING: {
      return {
        ...state,
        loading2:true
      }
    }
    case AUTH_LOGIN_REQ: {
      return {
        ...state,
        loading2: false,
        token:action.payload,   
        }
    }
      
    case AUTH_LOGIN_REQ_ERROR: {
      return {
        ...state,
        loading2: false,
        token:""
      }
      }
   default: {
      return state;
      }
  }
    
}
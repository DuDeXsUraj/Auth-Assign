import { getUserFromLocalStorage } from "../Utils/LocalStorage";

// redux/authReducer.js
const initialState = {
    user: getUserFromLocalStorage(),
    isAuthenticated: false,
  };
  
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
          isAuthenticated: false,
        };
      case 'SIGNUP':
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
        };
      default:
        return state;
    }
  };
  
  export default Reducer;
  
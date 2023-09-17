// store/authActions.js
export const login = (userData) => ({
    type: 'LOGIN',
    payload: userData,
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });

  export const signup = (userData) => ({
    type: 'SIGNUP',
    payload: userData,
  });
  
  
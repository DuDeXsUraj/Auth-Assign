import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useNavigate } from 'react-router-dom';
import { logout } from '../Redux/Actions';



const Logout = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logout());
    localStorage.removeItem('userData');
    // Redirect to the login page or any other page as needed
    history('/');
    alert("Are you sure?")
  };

  return (
    <div>
      <button type="button" onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
};

export default Logout;

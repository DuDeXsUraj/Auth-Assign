import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { signup } from '../Redux/Actions';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [userData, setUserData] = useState({ email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = () => {
    // Dispatch the signup action with the form data
    dispatch(signup(userData));

    // Redirect to the profile page or any other page as needed
    history('/profile');
  };

  return (
    <div className='login-container'>
      <h2>Sign Up</h2>
      <form>
      <input
          type="text"
          name="name"
          placeholder="Name"
          value={userData.name}
          onChange={handleInputChange}
        />
        <input
            type="text"
            name="company"
            placeholder="Company"
            value={userData.company}
            onChange={handleInputChange}
          />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;

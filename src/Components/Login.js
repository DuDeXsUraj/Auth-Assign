import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/Actions';
import { Navigate, useNavigate } from 'react-router-dom';
import '../Styles/Login.css'

const Login = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [userData, setUserData] = useState({ name:'' ,email: '', password: '' ,company:'',phone:'',isMember:true});
  const [loading, setLoading] = useState(false);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleLogin = async () => {
    const{name,email,password,company,phone} = userData;
  if(!email || !password || !company ||!name||!phone){
      alert('Please fill in all fields')
      return;
    }
   
    try {
      setLoading(true);
      // Dispatch the login action with the form data
      await dispatch(login(userData));
      setLoading(false);

      localStorage.setItem('userData', JSON.stringify(userData));
      // Redirect to the profile page after successful login
      history('/profile'); // Use history.push for navigation
    } catch (error) {
      setLoading(false);
      // Handle login error (e.g., show an error message)
      console.error('Login error:', error);
    }
  };

  // const handleSubmit =(e)=>{
  //   e.preventDefault()
  //   const{name,email,password} = userData;
  //   if(!email || !password || (!name)){
  //     toast.error('Please fill in all fields')
  //     return;
  //   }
  // }

  const toggleMember =()=>{
    
    
      setUserData({...userData, isMember:!userData.isMember})
  }

  return (
    <div className='login-container'>
      <h2>{userData.isMember?'Login':'Register'}</h2>
      <form>
      {!userData.isMember &&<input
          type="text"
          name="name"
          placeholder="Name"
          value={userData.name}
          onChange={handleInputChange}
        />}

       {!userData.isMember&& <input
            type="text"
            name="company"
            placeholder="Company"
            value={userData.company}
            onChange={handleInputChange}
          />}

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={userData.phone}
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
        <button type="button" onClick={handleLogin} disabled={loading}>
          {loading ? 'Logging In...' : 'submit'}
        </button>
      </form>
      <p className='mt-3'> {userData.isMember?'Not a member yet?':'Already a member?'}<button type='button' className='btn' onClick={toggleMember}>{userData.isMember?'Register':'login'}</button></p>
    </div>
  );
};

export default Login;

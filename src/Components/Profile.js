import React from 'react';
import { useSelector } from 'react-redux';
import Logout from './Logout';
import '../Styles/Profile.css'; // Import your CSS file

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  if (!user) {
    return <p>Loading user profile...</p>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>{user.name} Profile</h2>
      </div>
      <div className="profile-info">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Company:</strong> {user.company}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        {/* Add more user profile information as needed */}
      </div>
      <Logout />
    </div>
  );
};

export default Profile;

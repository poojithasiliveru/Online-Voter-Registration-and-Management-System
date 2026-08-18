import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/thank.css'; // Ensure the path is correct

const Thank = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };


  return (
    <div className="thank-you-container" >
      <h2>Thank You for Voting!</h2>
      <p>Your vote has been successfully recorded.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Thank;

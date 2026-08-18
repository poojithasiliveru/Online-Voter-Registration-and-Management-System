import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="home-container">
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

<br></br>
<div className="ro" style={{ textAlign: "center" }}>
<h1 className="home-subtitle">BALLOT BRIDGE</h1>
        </div>


      <div className="button-container">
        <button className="login-button" onClick={goToLogin}>
          LOGIN
        </button>
        <button className="register-button" onClick={goToRegister}>
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default Home;

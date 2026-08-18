import "../styles/RegisterForm.css"; // Importing CSS file for styling

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [aadharCardNumber, setAadharCardNumber] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Convert age to a number and check if it's 18 or older
    const parsedAge = Number(age);
    if (isNaN(parsedAge) || parsedAge < 18) {
      setError("Registration requires age to be 18 or older ");
      return;
    }

    try {
      const response = await api.post("/user/signup", {
        name,
        age: parsedAge, // Send age as a number
        email,
        mobile,
        address,
        aadharCardNumber,
        password,
        role: isAdmin ? "admin" : "voter",
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error.response || error);
      setError("Registration failed. Please check your details and try again.");
    }
  };

  return (
    <div className="register-form-container">
       <div className="r" style={{ textAlign: "center" ,color:"black"}}>
       <h2>REGISTER</h2>
        </div>
    
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number:</label>
          <input
            type="text"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="aadharCardNumber">Aadhar Card Number:</label>
          <input
            type="text"
            id="aadharCardNumber"
            value={aadharCardNumber}
            onChange={(e) => setAadharCardNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group"  style={{ textAlign: "center" }}>
          <label>            Register as Admin
          </label>
          <input
          
              type="checkbox"
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
            />
        </div>
        <div className="reg" style={{ textAlign: "center" }} >
        <button style={{ backgroundColor:"#071b31" }} type="submit">REGISTER</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;

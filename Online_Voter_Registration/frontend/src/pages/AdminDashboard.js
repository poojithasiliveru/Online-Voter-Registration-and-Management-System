import React from "react";
import AdminProfile from "../components/AdminProfile";
import { useNavigate } from "react-router-dom";
import "../styles/AdminDashboard.css"; // Importing CSS file for styling

const Dashboard = () => {
  const navigate = useNavigate();

  const goToCandidateManagement = () => {
    navigate("/candidateManagement");
  };

  const goToResults = () => {
    navigate("/result"); // Navigate to the Results page
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <div className="r" style={{ textAlign: "center" ,color:"black" }}>
      <h2>Dashboard</h2>
        </div>
        <br></br>
     
      
      <AdminProfile />
    <br></br>
    <br></br>
   
   

      <button style={{ backgroundColor:"#071b31" }}
        className="candidate-management-btn"
        onClick={goToCandidateManagement}
      >
        Go to Candidate Management
      </button>  
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <button style={{ backgroundColor:"#071b31" }} className="logout-btn" onClick={handleLogout}>
        LOG OUT
      </button>
      <br></br>
      <br></br>
      <button style={{ backgroundColor:"#071b31" }} className="results-btn" onClick={goToResults}>
          View Voting Results
        </button>
        <br></br>
      <br></br>
       
    </div>
  );
};

export default Dashboard;

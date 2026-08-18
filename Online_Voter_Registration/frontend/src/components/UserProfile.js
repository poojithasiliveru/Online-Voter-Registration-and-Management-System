import React, { useState, useEffect } from "react";
import api from "../services/api";
import "../styles/UserProfile.css"; // Importing CSS file for styling

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        // Fetch user profile data
        const profileResponse = await api.get("/user/profile", { headers });
        setUser(profileResponse.data.user);

        // Fetch voting status data
        const votingStatusResponse = await api.get("/user/voting-status", { headers });

        // Check if voting status response has the 'hasVoted' property
        if (votingStatusResponse.data && typeof votingStatusResponse.data.hasVoted !== "undefined") {
          setHasVoted(votingStatusResponse.data.hasVoted);
        } else {
          console.warn("Unexpected voting status response:", votingStatusResponse.data);
          //setError("Could not retrieve voting status.");
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setError("Failed to fetch user profile");
      }
    };

    fetchUserProfile();
  }, []);

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await api.put(
        "/user/profile/password",
        {
          currentPassword: password,
          newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Password updated successfully");
      setPassword("");
      setNewPassword("");
    } catch (error) {
      setError(
        error.response && error.response.data && error.response.data.error
          ? error.response.data.error
          : "Failed to update password. Please try again later."
      );
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-profile-container">
      <div className="r" style={{ textAlign: "center" ,color:"black" }}>
      <h2>USER PROFILE</h2>
        </div>
      
      {error && <div className="error">{error}</div>}
      <div className="user-details" style={{ color:"black" }}>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Aadhar Card Number: {user.aadharCardNumber}</p>
        <p>Voting Status: {hasVoted ? "Voted" : "Not Voted"}</p>
        <form onSubmit={handlePasswordUpdate}>
          <div className="password-update">
            <label htmlFor="currentPassword">Current Password:</label>
            <input
              type="password"
              id="currentPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="password-update">
            <label htmlFor="newPassword">New Password:</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <button style={{ backgroundColor:"#071b31"}} type="submit">UPDATE PASSWORD</button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;

import React, { useState, useEffect } from "react";
import api from "../services/api";
import "../styles/CandidateManagement.css";

const CandidateManagement = () => {
  const [candidates, setCandidates] = useState([]);
  const [name, setName] = useState("");
  const [party, setParty] = useState("");
  const [age, setAge] = useState("");
  const [editCandidateId, setEditCandidateId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editParty, setEditParty] = useState("");
  const [editAge, setEditAge] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    try {
      const response = await api.get("/candidate");
      setCandidates(response.data);
    } catch (error) {
      setError("");
    }
  };

  const handleAddCandidate = async (e) => {
    e.preventDefault();
    try {
      api.setToken(localStorage.getItem("token"));
      await api.post("/candidate", { name, party, age });
      alert("Candidate added successfully");
      fetchCandidates();
      setName("");
      setParty("");
      setAge("");
    } catch (error) {
      setError("Failed to add candidate. Please try again.");
    }
  };

  const handleUpdateCandidate = async (candidateId) => {
    try {
      api.setToken(localStorage.getItem("token"));
      await api.put(`/candidate/${candidateId}`, {
        name: editName,
        party: editParty,
        age: editAge,
      });
      alert("Candidate updated successfully");
      setEditCandidateId(null); // Reset the edit mode
      fetchCandidates();
    } catch (error) {
      setError("Failed to update candidate. Please try again.");
    }
  };

  const handleDeleteCandidate = async (candidateId) => {
    try {
      api.setToken(localStorage.getItem("token"));
      await api.delete(`/candidate/${candidateId}`);
      alert("Candidate deleted successfully");
      fetchCandidates();
    } catch (error) {
      setError("Failed to delete candidate. Please try again.");
    }
  };

  const enableEditMode = (candidate) => {
    setEditCandidateId(candidate._id);
    setEditName(candidate.name);
    setEditParty(candidate.party);
    setEditAge(candidate.age);
  };

  return (
    <div className="candidate-management-container">
      <h2 style={{ color:"black" }}>Candidate Management</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleAddCandidate}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="party">Party:</label>
          <input
            type="text"
            id="party"
            value={party}
            onChange={(e) => setParty(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Candidate</button>
      </form>

      <h3  style={{ color:"black" }}>List Of Candidates</h3>
      <table style={{ color:"black" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Party</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <tr key={candidate._id}>
              <td>
                {editCandidateId === candidate._id ? (
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                ) : (
                  candidate.name
                )}
              </td>
              <td>
                {editCandidateId === candidate._id ? (
                  <input
                    type="text"
                    value={editParty}
                    onChange={(e) => setEditParty(e.target.value)}
                  />
                ) : (
                  candidate.party
                )}
              </td>
              <td>
                {editCandidateId === candidate._id ? (
                  <input
                    type="number"
                    value={editAge}
                    onChange={(e) => setEditAge(e.target.value)}
                  />
                ) : (
                  candidate.age
                )}
              </td>
              <td>
                {editCandidateId === candidate._id ? (
                  <button
                    className="button-space"
                    onClick={() => handleUpdateCandidate(candidate._id)}
                  >
                    SAVE
                  </button>
                ) : (
                  <button
                    className="button-space"
                    onClick={() => enableEditMode(candidate)}
                  >
                    EDIT
                  </button>
                )}
                <button onClick={() => handleDeleteCandidate(candidate._id)}>
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CandidateManagement;

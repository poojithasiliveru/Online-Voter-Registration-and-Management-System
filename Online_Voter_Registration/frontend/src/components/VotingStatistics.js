import "../styles/VotingStatistics.css"; // Importing CSS file for styling
import React, { useEffect, useState } from "react";
import api from "../services/api";

const VotingStatistics = () => {
  const [candidates, setCandidates] = useState([]);
  const [error, setError] = useState("");
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        api.setToken(localStorage.getItem("token"));
        const response = await api.get("/candidate");
        setCandidates(response.data);

        // Determine the winner
        const maxVotes = Math.max(...response.data.map(candidate => candidate.voteCount));
        const winnerCandidate = response.data.find(candidate => candidate.voteCount === maxVotes);
        setWinner(winnerCandidate);
      } catch (error) {
        setError("Failed to fetch voting statistics");
        console.error(error);
      }
    };
    fetchCandidates();
  }, []);

  return (
    <div className="voting-stats-container" style={{ color: "white" }}>
      <h1 style={{ textAlign: "center" }}>Voting Statistics</h1>
      {error && <div className="error">{error}</div>}
      <div className="table-container" style={{ color: "white" }}>
        <table className="candidate-table">
          <thead>
            <tr>
              <th>Candidate Name</th>
              <th>Party</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => (
              <tr key={candidate._id}>
                <td>{candidate.name}</td>
                <td>{candidate.party}</td>
                <td>{candidate.voteCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {winner && (
          <div className="winner">
            <h4>Winner: {winner.name} from {winner.party} with {winner.voteCount} votes!</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default VotingStatistics;

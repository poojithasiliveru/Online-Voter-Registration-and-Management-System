import React, { useState, useEffect } from "react";
import api from "../services/api";

const VoteResults = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const fetchVoteResults = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await api.get("/candidate/vote/count", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setResults(response.data);

        // Calculate the winner
        const maxVotes = Math.max(...response.data.map(result => result.count));
        const winnerCandidate = response.data.find(result => result.count === maxVotes);
        setWinner(winnerCandidate);
      } catch (error) {
        setError("Failed to fetch vote results");
      }
    };
    fetchVoteResults();
  }, []);

  return (
    <div>
      <h3>Vote Results</h3>
      {error && <div className="error">{error}</div>}
      <ul>
        {results.map((result) => (
          <li key={result._id}>
            {result.party}: {result.count} votes
          </li>
        ))}
      </ul>
      {winner && (
        <div className="winner">
          <h4>Winner: {winner.party} - {winner.count} votes</h4>
        </div>
      )}
    </div>
  );
};

export default VoteResults;

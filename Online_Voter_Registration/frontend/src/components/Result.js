import React from "react";
import VotingStatistics from "../components/VotingStatistics";
import "../styles/result.css"; // Optional: if you have a dedicated CSS file for Results

const Results = () => {
  return (
    <div className="results-container">
     
      <VotingStatistics />
    </div>
  );
};

export default Results;

import React from "react";
import "../styles/About.css"; // Import CSS file


export default function About() {
  return (
    <div className="about-container">
       <div className="r" style={{ textAlign: "center" }}>
       <h1 className="about-heading">ABOUT US</h1>
        </div>
    
      <p>
        Welcome to our Online Voting System! Our platform is designed to
        provide a secure, transparent, and accessible way for people to
        participate in voting processes. We believe in empowering voters by
        making voting more convenient and ensuring each vote is counted
        accurately and efficiently.
      </p>
      <p>
        Our system combines advanced technology with user-friendly design to
        ensure that both voters and administrators can navigate the voting
        process with ease. With real-time updates, secure authentication, and
        end-to-end data protection, our platform guarantees that every
        individual’s vote remains confidential and safeguarded against
        tampering.
      </p>
      <p>
        We are committed to enhancing the democratic experience by eliminating
        traditional barriers to voting. Through innovation and a focus on
        reliability, our goal is to make online voting accessible to all, paving
        the way for a more inclusive and engaged community. Thank you for
        choosing to participate in a future where voting is made easier and more
        secure for everyone.
      </p>
    </div>
  );
}


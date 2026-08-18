import React from "react";
import "../styles/Contact.css"; // Import CSS file

export default function Contact() {
  return (
    <div className="contact-container">
       <div className="r" style={{ textAlign: "center" }}>
       <h1 className="contact-heading">CONTACT US</h1>
        </div>
    
      <p>
        Thank you for using our online voting system. We are committed to
        ensuring a secure, transparent, and accessible voting experience for all users.
        If you have any questions, feedback, or encounter issues while using the platform, 
        please reach out to us. Our support team is here to assist you.
      </p>
      <p>
        You can contact us via email at <strong>support@onlinevotingsystem.com</strong> or 
        call us at <strong>(123) 456-7890</strong>. We are available Monday through Friday, 
        from 9:00 AM to 6:00 PM.
      </p>
        We value your feedback and are continuously working to improve our system.
        Together, let's make every vote count.

    </div>
  );
}

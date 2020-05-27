import React from "react";
import Alert from "react-bootstrap/Alert";

const Profile = ({ user: { username, email, signup_date } }) => {
  // console.log('Props ', props)
  return (
    <div style={{ position: "absolute", top: "300px", width: "100%" }}>
      {['success'].map((variant, idx) => (
      <Alert key={idx} variant={variant} style={{width:"220px"}}>
        Successfully logged in
      </Alert>
      ))}
      <p>
        <strong>Username:</strong> {username}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Sign Up Date:</strong> {new Date(signup_date).toLocaleString()}
      </p>
    </div>
  );
};

export default Profile;

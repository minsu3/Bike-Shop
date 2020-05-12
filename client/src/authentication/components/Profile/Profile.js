import React from "react";

const Profile = ({ user: { username, email, signup_date } }) => {
  // console.log('Props ', props)
  return (
    <div style={{ position: "absolute", top: "300px", width: "100%" }}>
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

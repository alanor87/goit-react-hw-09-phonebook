import React from "react";
import { useSelector } from "react-redux";
import { currentUserName } from "../../redux/auth/auth-selectors";

export default function DefaultLoggedInView() {
  const userName = useSelector(currentUserName);
  return (
    <div className="container">
      <h1>Welcome, {userName}</h1>
    </div>
  );
}

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import authOps from "../../redux/auth/auth-operations";

export default function RegisterView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onInputChange = (event) => {
    const input = event.target;
    switch (input.dataset.role) {
      case "name":
        setName(input.value);
        break;
      case "email":
        setEmail(input.value);
        break;
      case "password":
        setPassword(input.value);
        break;
      default:
        return;
    }
  };

  const onRegisterSubmit = (event) => {
    event.preventDefault();
    dispatch(authOps.register({ name, email, password }));
    event.target.reset();
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <form className="inputForm" onSubmit={onRegisterSubmit}>
        <label className="inputLabel">
          Name
          <input
            className="inputField"
            data-role="name"
            type="text"
            onChange={onInputChange}
            required
          />
        </label>
        <label className="inputLabel">
          E-mail
          <input
            className="inputField"
            data-role="email"
            type="text"
            onChange={onInputChange}
            required
          />
        </label>
        <label className="inputLabel">
          Password
          <input
            className="inputField"
            data-role="password"
            type="text"
            onChange={onInputChange}
            required
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

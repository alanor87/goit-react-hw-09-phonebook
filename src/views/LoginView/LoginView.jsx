import React, { useState } from "react";
import { useDispatch } from "react-redux";
import authOps from "../../redux/auth/auth-operations";

export default function LoginView () {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onInputChange = (event) => {
    const input = event.target;
    switch (input.dataset.role) {
      case 'email':
        setEmail(input.value);
        break;
      case 'password':
        setPassword(input.value);
        break;
      default: return;
    }
  };

  const onLoginSubmit = (event) => {
    event.preventDefault();
    dispatch(authOps.login({ email, password }));
    event.target.reset();
  };

    return (
      <div className="container">
        <h1>Login</h1>
        <form className="inputForm" onSubmit={onLoginSubmit}>
          <label className="inputLabel">
            E-mail
            <input
              className="inputField"
              type="text"
              required
              onChange={onInputChange}
              data-role="email"
            />
          </label>
          <label className="inputLabel">
            Password
            <input
              className="inputField"
              type="text"
              required
              onChange={onInputChange}
              data-role="password"
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    );
}
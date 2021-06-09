import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AuthMenu.module.css";

const AuthMenu = () => {
  return (
    <div className={styles.userNav}>
      <NavLink
        className="navLink"
        activeClassName="activeNavLink"
        exact
        to="/login"
      >
        Login
      </NavLink>
      <NavLink
        className="navLink"
        activeClassName="activeNavLink"
        exact
        to="/register"
      >
        Register
      </NavLink>
    </div>
  );
};

export default AuthMenu;

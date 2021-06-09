import React from "react";
import { useSelector } from "react-redux";
import UserMenu from "../UserMenu";
import AuthMenu from "../AuthMenu";
import {
  isAuthentificated,
  currentUserEmail,
} from "../../redux/auth/auth-selectors";

export default function NavHeader() {
  const isLoggedIn = useSelector(isAuthentificated);
  const useEmail = useSelector(currentUserEmail);
  return (
    <header>{isLoggedIn ? <UserMenu email={useEmail} /> : <AuthMenu />}</header>
  );
}

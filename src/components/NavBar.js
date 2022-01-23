import React from "react";
import { Button, Nav } from "react-bootstrap";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import authStore from "../stores/authStore";
import { observer } from "mobx-react"

function Navbar() {

  return (
    <Nav className="justify-content-end" bg="dark" expand="lg">
      {authStore.user ?  authStore.user.username : ""}
      {authStore.user ? (
        <Button onClick={authStore.signout}>SignOut</Button>
      ) : (
        <>
      <SignUpModal  />
      <SignInModal  />
      </>
      )}
    </Nav>
  );
}

export default observer(Navbar);
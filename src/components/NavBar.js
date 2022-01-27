import React from "react";
import { Button, Nav } from "react-bootstrap";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";
import { JamiyaForm } from "./JamiyaForm";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";


function Navbar({setSearch , search}) {
  return (
    <Nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      {authStore.user ?  authStore.user.username : ""}
      {authStore.user ? (
        <>
        <div>
          <Link to={"/"}>
            <Button>Home</Button>
          </Link>
          <JamiyaForm />
          <Button onClick={authStore.signout}>SignOut</Button>
          
          </div>

          <div><SearchBar setSearch={setSearch} /></div>
    </>
      ) : ( 
        <>
        <Link to={"/"}>
            <Button>Home</Button>
          </Link>
          <SignUpModal />
          <SignInModal />

          
          
          
        </>
      )}
    </Nav>
  );
}

export default observer(Navbar);

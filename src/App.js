import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Jam3yat from "./components/Jam3yat";
import { Container } from "react-bootstrap";
function App() {
  return (
    <div>
      <NavBar />
      <div className="__main">
        <div className="main__chatbody"></div>
      </div>
      <Container>
        <Jam3yat />
      </Container>
    </div>
  );
}

export default App;

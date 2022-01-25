import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./Components/NavBar";
import Jam3yat from "./Components/Jam3yat";
import { Container } from "react-bootstrap";
import DetailsPage from "./Components/DetailsPage";
function App() {
  return (
    <div>
      <NavBar />
      <div className="__main">
        <div className="main__chatbody"></div>
      </div>
      <Container>
        <Jam3yat />
        <DetailsPage />
      </Container>
    </div>
  );
}

export default App;

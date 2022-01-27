import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Jam3yat from "./components/Jam3yat";
import { Container } from "react-bootstrap";
function App() {
  const [search, setSearch] = useState("");

  console.log("state", search);
  return (
    <div>
      <NavBar setSearch={setSearch} />
      <div className="__main">
        <div className="main__chatbody"></div>
      </div>
      <Container>
        <Jam3yat search={search} />
      </Container>
    </div>
  );
}

export default App;

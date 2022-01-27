import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Jam3yat from "./components/Jam3yat";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import DetailsPage from "./components/DetailsPage";
import { observer } from "mobx-react";


function App() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <NavBar setSearch={setSearch} search={search}/>
      <div className="__main">
        <div className="main__chatbody"></div>
      </div>
      <Container>
        <Routes>
          <Route path="/" element={<Jam3yat search={search} />} />
          <Route path="/jaamiyat/:slug" element={<DetailsPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default observer(App);

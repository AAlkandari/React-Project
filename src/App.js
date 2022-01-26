import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Jam3yat from "./components/Jam3yat";
import { Container } from "react-bootstrap";
import DetailsPage from "./components/DetailsPage";
import { observer } from "mobx-react";
import { Routes, Route } from "react-router-dom";

function App() {
  // const jamiyaatDetailsPages = jamiyaStore.jamiyaat.map((jamiya) => (
  //   <DetailsPage jamiya={jamiya} />
  // ));

  //   const jamiyaatDetailsSlugs = jamiyaStore.jamiyaat.map((jamiya) => ({
  //     jamiya,
  //   }));

  // <Route
  //   path="/jamiyaat/slug_history/:slug"
  //   element={<DetailsPage jamiyaat={jamiyaat}/>}
  // />

  // const { slug } = useParams();

  // console.log(jamiyaatList);

  return (
    <div>
      <NavBar />
      <div className="__main">
        <div className="main__chatbody"></div>
      </div>
      <Container>
        <Routes>
          <Route path="/" element={<Jam3yat />} />
          <Route path="/jaamiyat/:slug" element={<DetailsPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default observer(App);

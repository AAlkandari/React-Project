import React from "react";
import jamiyaStore from "../stores/jamiyaStore";
import DetailsBio from "./DetailsBio";
import DetailsMembersList from "./DetailsMembersList";
import { useParams } from "react-router-dom";

function DetailsPage() {
  const { slug } = useParams();
  console.log(slug);

  const jamiya = jamiyaStore.jamiyaat.find((jamiya) => jamiya.slug === slug);

  console.log(jamiya);
  //Try mapping code from Ollivander's wand shop task (below)
  //const jm3yaDetails = api.map((jm3ya) => <DetailsPage jm3ya={jm3ya} />);

  //Maybe try useState?

  return (
    <div>
      <div>
        <img className="DetailsProfilePic" src={jamiya.image} alt=""></img>
      </div>
      <h1 style={{ backgroundColor: "#A5E1AD", color: "black" }}>
        <p>Jam3iyet,</p>
        {jamiya.title}
      </h1>

      <div className="DetailsPageButton">
        <button
          style={{
            backgroundColor: "#96CEB4",
            color: "white",
            height: 40,
            width: 100,
            cursor: "pointer",
            marginRight: 5,
            fontWeight: "bold",
          }}
        >
          Join
        </button>
        <button
          style={{
            backgroundColor: "#96CEB4",
            color: "white",
            height: 40,
            width: 100,
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Leave
        </button>
      </div>
      <div style={{ display: "flex" }}>
        <DetailsBio jamiya={jamiya} />
        <DetailsMembersList jamiya={jamiya} />
      </div>
    </div>
  );
}

export default DetailsPage;

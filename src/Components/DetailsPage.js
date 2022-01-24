import react from "react";
import api from "../api";
import DetailsBio from "./DetailsBio";
import DetailsMembersList from "./DetailsMembersList";

function DetailsPage() {
  //   const jm3yaDetails = api.map((jm3ya) => <DetailsPage jm3ya={jm3ya} />);
  return (
    <div>
      <div style={{ backgroundColor: "#aefeff" }}>
        <img
          className="DetailsProfilePic"
          src="https://cdn.countryflags.com/thumbs/kuwait/flag-round-250.png"
        ></img>
      </div>
      <h1 style={{ backgroundColor: "#4FBDBA", color: "white" }}>
        Jm3ya title
      </h1>
      <div className="DetailsPageButton">
        <button
          style={{
            backgroundColor: "#4FBDBA",
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
            backgroundColor: "#4FBDBA",
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
        <DetailsBio />
        <DetailsMembersList />
      </div>
    </div>
  );
}

export default DetailsPage;

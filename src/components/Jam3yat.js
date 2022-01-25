import React, { Fragment } from "react";
import { Row } from "react-bootstrap";
import Jam3ya from "./Jam3ya";
import jamiyaStore from "../stores/jamiyaStore";
import { observer } from "mobx-react";

function Jam3yat() {
  const jam3yaList = jamiyaStore.jamiyaat.map((jam3ya) => (
    <Jam3ya jam3ya={jam3ya} key={jam3ya._id}/>
  ));
  if (jamiyaStore.loading) return <h1>Loading</h1>;
  console.log(
    "🚀 ~ file: Jam3yat.js ~ line 9 ~ Jam3yat ~ jam3yaList",
    jam3yaList
  );

  return (
    <Fragment>
      <Row className="align-items-stretch">{jam3yaList}</Row>
    </Fragment>
  );
}

export default observer(Jam3yat);
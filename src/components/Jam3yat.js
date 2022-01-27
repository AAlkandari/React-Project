import React, { Fragment } from "react";
import { Row } from "react-bootstrap";
import Jam3ya from "./Jam3ya";
import jamiyaStore from "../stores/jamiyaStore";
import { observer } from "mobx-react";

function Jam3yat({ search }) {
  if (jamiyaStore.loading) return <h1>Loading</h1>;
  const searchList = jamiyaStore.jamiyaat
    .filter((jam3ya) => {
      if (search === "") return true;
      else return jam3ya.amount <= parseInt(search);
    })
    .map((jam3ya) => <Jam3ya jam3ya={jam3ya} key={jam3ya._id} />);
  console.log(searchList);
  return (
    <Fragment>
      <Row className="align-items-stretch">{searchList}</Row>
    </Fragment>
  );
}

export default observer(Jam3yat);

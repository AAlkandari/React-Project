import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import moment from "moment";




//Try mapping code from Ollivander's wand shop task (below)
//const jm3yaDetails = api.map((jm3ya) => <DetailsPage jm3ya={jm3ya} />);

/* <div>
    {this.state.people.map((person, index) => (
        <p>Hello, {person.name} from {person.country}!</p> */

function DetailsBio({ jamiya }) {

  const startDate = moment(jamiya.startDate);
  const endDate = moment(jamiya.endDate);

  return (
    <div>
      <Card style={{ width: "13rem" }}>
        {" "}
        <Card.Body style={{ backgroundColor: "#A5E1AD" }}>
          <Card.Title style={{ color: "black", fontSize: 22 }}>
            <h3>Owner: </h3> @{jamiya.author.username}
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Start date: {moment(startDate).format("DD-MM-YYYY")}</ListGroupItem>
          <ListGroupItem>End date: {moment(endDate).format("DD-MM-YYYY")}</ListGroupItem>
          <ListGroupItem>Amount: {jamiya.amount}</ListGroupItem>
          <ListGroupItem>Limit: {jamiya.limit}</ListGroupItem>
          <ListGroupItem>Email: {jamiya.author.email}</ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
}

export default observer(DetailsBio);
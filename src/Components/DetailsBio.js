import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { observer } from "mobx-react-lite";

//Try mapping code from Ollivander's wand shop task (below)
//const jm3yaDetails = api.map((jm3ya) => <DetailsPage jm3ya={jm3ya} />);

/* <div>
    {this.state.people.map((person, index) => (
        <p>Hello, {person.name} from {person.country}!</p> */

function DetailsBio({ jamiya }) {
  return (
    <div>
      <Card style={{ width: "13rem" }}>
        {" "}
        <Card.Body style={{ backgroundColor: "#A5E1AD" }}>
          <Card.Title style={{ color: "black", fontSize: 22 }}>
            @{jamiya.author.username}
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Start date: {jamiya.startDate}</ListGroupItem>
          <ListGroupItem>End date: {jamiya.endDate}:</ListGroupItem>
          <ListGroupItem>Duration: (months)</ListGroupItem>
          <ListGroupItem>Amount: {jamiya.amount}</ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
}

export default observer(DetailsBio);

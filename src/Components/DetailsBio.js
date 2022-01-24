import react from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap/";
import axios from "axios";
import api from "../api";

function DetailsBio() {
  return (
    <div>
      <Card style={{ width: "12rem" }}>
        {" "}
        <Card.Body style={{ backgroundColor: "#4FBDBA" }}>
          <Card.Title style={{ color: "white", fontSize: 22 }}>
            Creator
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Start date:</ListGroupItem>
          <ListGroupItem>End date:</ListGroupItem>
          <ListGroupItem>Duration: (months)</ListGroupItem>
          <ListGroupItem>Amount to pay monthly:</ListGroupItem>
          <ListGroupItem>Total jm3ya amount:</ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
}

export default DetailsBio;

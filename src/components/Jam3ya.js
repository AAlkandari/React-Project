import React from "react";
import { Button, Card } from "react-bootstrap";

function Jam3ya({ jam3ya }) {
  return (
    <div className="text-center">
      <Card className="cardClass my-4 p-4 rounded h-90">
        <Card.Img
          className="card-image"
          style={{ objectFit: "contain" }}
          variant="top"
          src={jam3ya.image}
        />
        <Card.Body>
          <Card.Title>{`${jam3ya.title}`}</Card.Title>

          <Card.Subtitle className="mb-2 text-muted">Info</Card.Subtitle>
          <Card.Text>
            <div>
              <strong>Limit:</strong> {jam3ya.limit}
            </div>
            <div>
              <strong>Amount:</strong> {jam3ya.amoun}
            </div>
            <div>
              <strong>Start:</strong> {jam3ya.startDate}
            </div>
            <div>
              <strong>End:</strong> {jam3ya.endDate}
            </div>
          </Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            Contact Info
          </Card.Subtitle>
          <Card.Text>
            <div>
              <strong>Email:</strong> {jam3ya.author.email}
            </div>
          </Card.Text>
          <a hrfe={`mailto: ${jam3ya.author.email}`}>
            <Button
              style={{ borderRadius: "20px" }}
              className="w-100 align-item-center"
              variant="primary"
            >
              For More Info Contact Us
            </Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Jam3ya;

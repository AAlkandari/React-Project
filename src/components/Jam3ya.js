import React, { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import jamiyaStore from "../stores/jamiyaStore";
import authStore from "../stores/authStore";
import JamiyaUpdate from "./UpdateJamiya";

function Jam3ya({ jam3ya }) {
  const handleDelete = () => {
    jamiyaStore.deleteJamiya(jam3ya._id);
  };
  const [closeModal, setIsOpen] = useState(false);

  return (
    <Col sm={12} md={6} lg={4} key={jam3ya.author.startDate}>
      <Card className="cardClass my-4 p-4 rounded h-90 text-center">
        <Card.Img
          className="card-image"
          style={{ objectFit: "contain" }}
          variant="top"
          src={jam3ya.image}
        />
        <Card.Body>
          <Card.Title>{jam3ya.title}</Card.Title>

          <Card.Subtitle className="mb-2 text-muted">Info</Card.Subtitle>
          <Card.Text>
            <div>
              <strong>Limit:</strong> {jam3ya.limit}
            </div>
            <div>
              <strong>Amount:</strong> {jam3ya.amount}
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
          <a href={`mailto: ${jam3ya.author.email}`}>
            <Button
              style={{ borderRadius: "20px" }}
              className="w-100 align-item-center"
              variant="primary"
            >
              For More Info Contact Us
            </Button>
          </a>

          {authStore.user && jam3ya.author._id === authStore.user._id && (
            <Button
              style={{ borderRadius: "20px" }}
              className="w-100 align-item-center"
              variant="primary"
              onClick={handleDelete}
            >
              Delete
            </Button>
          )}
          {authStore.user && jam3ya.author._id === authStore.user._id && (
            <JamiyaUpdate
              setIsOpen={setIsOpen}
              closeModal={closeModal}
              jam3ya={jam3ya}
            />
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Jam3ya;

import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Jam3ya({ jam3ya }) {
  // console.log(jam3ya.slug);
  //  let navigate = useNavigate();
  // const routeChange = () =>{
  //   let path = `newPath`;
  //   navigate(path);

  return (
    <Col sm={12} md={6} lg={4} key={jam3ya.author.startDate}>
      <Link to={`/jaamiyat/${jam3ya.slug}`}>
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
            <a href={`mailto: ${jam3ya.author.email}`}>
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
      </Link>
    </Col>
  );
}

export default Jam3ya;

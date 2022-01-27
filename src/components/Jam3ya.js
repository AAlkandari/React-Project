import React, {useState} from "react";
import { Button, Card, Col } from "react-bootstrap";
import jamiyaStore from "../stores/jamiyaStore";
import authStore from "../stores/authStore";
import JamiyaUpdate from "./UpdateJamiya";
import moment from "moment";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import SignInModal from "./SignInModal";


function Jam3ya({ jam3ya }) {

const handleDelete = () => {
  jamiyaStore.deleteJamiya(jam3ya._id);}

  const [closeModal, setIsOpen] = useState(false);

  const startDate = moment(jam3ya.startDate);
  const endDate = moment(jam3ya.endDate);
  const currentDay = moment();

  return (

    <Col sm={12} md={6} lg={4} key={jam3ya.author.startDate}>
      
      <Card className="cardClass my-4 p-4 rounded h-90">
        <Card.Img
          className="card-image"
          style={{ objectFit: "contain" }}
          variant="top"
          src={jam3ya.image}
        />
        <Card.Body>
          <Card.Title><strong>Title:</strong> {jam3ya.title}</Card.Title>

          <Card.Subtitle className="mb-2 text-muted">Info</Card.Subtitle>
          <Card.Text>
            <div>
              <strong>Limit:</strong> {jam3ya.limit}
            </div>
            <div>
              <strong>Amount:</strong> {jam3ya.amount}
            </div>
            <div>
              <strong>Start:</strong> {moment(startDate).format("DD-MM-YYYY")}
            </div>
            <div>
              <strong>End:</strong> {moment(endDate).format("DD-MM-YYYY")}
            </div>
          </Card.Text>
          
          { authStore.user ?
          (<Link to={`/jaamiyat/${jam3ya.slug}`}>
           <Button style={{ borderRadius: "20px", marginBottom: "7px" }}
              className="w-100 align-item-center"
              variant="primary" >
          Details
          </Button>
          </Link>)
          :
          <div><h5> <SignInModal /> to see the Details</h5>
          </div>}

         
          { authStore.user && jam3ya.author._id === authStore.user._id &&
          <Button style={{ borderRadius: "20px", marginBottom: "7px" }}
              className="w-100 align-item-center"
              variant="primary"  onClick={handleDelete}> Delete</Button> } 
        
              {authStore.user && jam3ya.author._id === authStore.user._id && 
        <JamiyaUpdate setIsOpen={setIsOpen} closeModal={closeModal} jam3ya={jam3ya} />}
        
        &nbsp;

        {authStore.user && currentDay.isAfter(startDate) && <h3>Started Already</h3>}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default observer(Jam3ya);
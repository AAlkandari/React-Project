import React from "react";
import jamiyaStore from "../stores/jamiyaStore";
import DetailsBio from "./DetailsBio";
import DetailsMembersList from "./DetailsMembersList";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'
import { observer } from "mobx-react";
import { Button } from "react-bootstrap"
import authStore from "../stores/authStore";
import moment from "moment";

function DetailsPage() {
  
const { slug } = useParams();
  
if (jamiyaStore.loading) return <h1>Loading</h1>;

const jamiya = jamiyaStore.jamiyaat.find((jamiya) => jamiya.slug === slug);

const usersInJamiya = jamiya.users.length -1;

const members = jamiya.users.some(user =>  user._id === authStore.user._id );

const handleJoin = () => {
jamiyaStore.joinJamiya(jamiya._id);
Swal.fire({
  icon: 'success',
  title: 'You Joined this Jam3ya',
})}

const handleLeave = () => {
  jamiyaStore.leaveJamiya(jamiya._id);
  Swal.fire({
    icon: 'success',
    title: 'You Left this Jam3ya',
  })}

const startDate = moment(jamiya.startDate);

const currentDay = moment();

  return (
    <div>
      <div>
        <img className="DetailsProfilePic" src={jamiya.image} alt=""></img>
      </div>
      <h1 style={{ backgroundColor: "#A5E1AD", color: "black" }}>
        
        {jamiya.title} 
      {authStore.user &&
       currentDay.isBefore(startDate) && usersInJamiya < +jamiya.limit && members === false ?
       ( <Button style={{
          backgroundColor: "#96CEB4",
          color: "white",
          height: 40,
          width: 100,
          cursor: "pointer",
          fontWeight: "bold",
          marginLeft: "680px",
          marginTop: "5px",
          position: "absolute",
        }}  onClick={handleJoin} >
         Join
        </Button> )
        :
        (<Button style={{
          backgroundColor: "#96CEB4",
          color: "white",
          height: 40,
          width: 100,
          cursor: "pointer",
          fontWeight: "bold",
          marginLeft: "680px",
          marginTop: "5px",
          position: "absolute",
        }}  onClick={handleLeave}>
         Leave
          </Button>)  }
     
      </h1>

      

      <div style={{ display: "flex" }}>
        <DetailsBio jamiya={jamiya} />
        <DetailsMembersList jamiya={jamiya} />
      </div>

    </div>
  );
}

export default observer(DetailsPage);
import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap"
import jamiyaStore from "../stores/jamiyaStore";
import DatePicker from "react-datepicker"
import { observer } from "mobx-react"

export const JamiyaUpdate = (props) => {

const [isOpen, setIsOpen] = useState(false);

const [updateJamiya, setUpdateJamiya] = useState({

        title: props.jam3ya.title,
        image: props.jam3ya.image,
        amount: props.jam3ya.amount,
        limit: props.jam3ya.limit,
        startDate: new Date(props.jam3ya.startDate),
        endDate: new Date(props.jam3ya.endDate)
});

    const handleChange = (event) => {
        setUpdateJamiya({...updateJamiya, [event.target.name] : event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        jamiyaStore.updateJamiya(props.jam3ya._id, updateJamiya)
        setIsOpen(false);
       
    };

    return(
    <>
        <Button style={{ borderRadius: "20px" }} className="w-100 align-item-center" onClick={() => setIsOpen(true)}> Update</Button>

         <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
         <Modal.Header closeButton>
         <Modal.Title>Update</Modal.Title>
         </Modal.Header>
         <Modal.Body>

             <Form onSubmit={{handleSubmit}}>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text" value={updateJamiya.title} onChange={handleChange} name="title" placeholder='Choose a title' />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="text" value={updateJamiya.image} onChange={handleChange} name="image" placeholder='Choose an image' />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control
                        type="number" value={updateJamiya.amount} onChange={handleChange} name="amount" placeholder='How Much would u like to pay?' />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Limit</Form.Label>
                    <Form.Control
                        type="number" value={updateJamiya.limit} onChange={handleChange} name="limit" placeholder='what is the limit of people u would like' />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>StartDate</Form.Label>
                    <DatePicker
                           selected ={updateJamiya.startDate} onChange={(date) => setUpdateJamiya({...updateJamiya, startDate: date})} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>EndDate</Form.Label>
                    <DatePicker
                          selected ={updateJamiya.endDate} onChange={(date) => setUpdateJamiya({...updateJamiya, endDate: date})} />
                </Form.Group>
            </Form>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>

    )
}
export default observer(JamiyaUpdate)
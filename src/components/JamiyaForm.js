import React, { useState } from 'react';
import { observer } from 'mobx-react';
import jamiyaStore from '../stores/jamiyaStore';
import { Modal, Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";


export const JamiyaForm = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [newJamiya, setNewJamiya] = useState({
        title: "",
        image: "",
        amount: "",
        limit: "",
        startDate: "",
        endDate: "",

    });

    const handleChange = (event) => {
        setNewJamiya({...newJamiya, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        jamiyaStore.createJamiya(newJamiya);
        setIsOpen(false);
        
    }

    
    return (
        
        <>
      <Button className="jamya" onClick={() => setIsOpen(true)}>
        Create Jam3ya
      </Button>
      <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Jam3ya</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={{handleSubmit}}>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text" value={newJamiya.title} onChange={handleChange} name="title" placeholder='Choose a title' />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="text" value={newJamiya.image} onChange={handleChange} name="image" placeholder='Choose an image' />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control
                        type="number" value={newJamiya.amount} onChange={handleChange} name="amount" placeholder='How Much would u like to pay?' />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Limit</Form.Label>
                    <Form.Control
                        type="number" value={newJamiya.limit} onChange={handleChange} name="limit" placeholder='what is the limit of people u would like' />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>StartDate</Form.Label>
                    <DatePicker
                           selected ={newJamiya.startDate} onChange={(date) => setNewJamiya({...newJamiya, startDate: date})} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>EndDate</Form.Label>
                    <DatePicker
                          selected ={newJamiya.endDate} onChange={(date) => setNewJamiya({...newJamiya, endDate: date})} />
                </Form.Group>
            
            </Form>

            </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Create Jam3ya
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}
export default observer(JamiyaForm)
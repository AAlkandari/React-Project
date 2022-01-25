import React, { useState } from 'react';
import { observer } from 'mobx-react';
import authStore from '../stores/authStore';
import jamiyaStore from '../stores/jamiyaStore';
import { Form, Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";

export const JamiyaForm = (props) => {
    const [newJamiya, setNewJamiya] = useState({
        title: "",
        image: "",
        amount: null,
        limit: null,
        startDate: Date.now(),
        endDate: Date.now(),

    });

    const handleChange = (event) => {
        setNewJamiya({...newJamiya, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        jamiyaStore.createJamiya(newJamiya);
        authStore.checkForToken(authStore.user._id);
        props.closeModal();
    }
    return (
        <div>
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
                         value={newJamiya.startDate} onChange={handleChange} selected ={newJamiya.startDate} onChange={(date) => setNewJamiya({...newJamiya, startDate: date})} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>EndDate</Form.Label>
                    <DatePicker
                         value={newJamiya.endDate} onChange={handleChange} selected ={newJamiya.endDate} onChange={(date) => setNewJamiya({...newJamiya, endDate: date})} />
                </Form.Group>
            <Button variant="primary" onClick={handleSubmit}>
                Submit</Button>
            </Form>


        </div>
    )
}
export default observer(JamiyaForm)
import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import authStore from "../stores/authStore";

function SignUpModal() {
  const [isOpen, setIsOpen] = useState(false);

    const [user, setUser] = useState({
      username: "",
      password: "",
      email: "",
    });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signUp(user);
    setIsOpen(false);
  };

  return (
    <>
      <Button className="delete" onClick={() => setIsOpen(true)}>
        Sign Up
      </Button>
      <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {
              <div>
          <label>Username</label>
          <input
                name="username"
                value={user.username}
                type="text"
                placeholder="Type your username"
                onChange={handleChange}/>
                <br></br>
          <label>Password</label>
          <input
            name="password"
            value={user.password}
            type="password"
            placeholder="Enter Your Password"
            onChange={handleChange}
          />
          <br></br>
          <label>Email</label>
          <input
            name="email"
            value={user.email}
            type="email"
            placeholder="Enter Your Email"
            onChange={handleChange}
          /></div>
            }
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Sign up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
  }
      
export default SignUpModal; 
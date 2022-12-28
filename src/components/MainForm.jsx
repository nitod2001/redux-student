import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addlist } from "../../redux/actions/addlist";
import Modal from "react-bootstrap/Modal";

export default function MainForm(props) {
  const [student, setStudent] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setStudent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // e.stopPropagation();
    setStudent("");
    dispatch(addlist(student));
    document.querySelector(".input").value = "";
    props.handleClose();
  };
  return (
    <>
      <Modal
        className="main-modal"
        show={props.show}
        onHide={props.handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Student</Form.Label>
              <Form.Control
                className="input"
                required
                onChange={(e) => handleChange(e)}
                placeholder="Enter student"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </form>
        </Modal.Body>
      </Modal>
      {/* <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Student</Form.Label>
          <Form.Control
            className="input"
            required
            onChange={(e) => handleChange(e)}
            placeholder="Enter student"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form> */}
    </>
  );
}

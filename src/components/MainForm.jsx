import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addlist } from "../../redux/actions/addlist";
import Modal from "react-bootstrap/Modal";
import { v4 as uuidv4 } from "uuid";

export default function MainForm(props) {
  const student = { id: "", name: "", birthday: "" };
  const [name, setName] = useState("");
  console.log(student);
  const [birthday, setBirthday] = useState(0);
  const dispatch = useDispatch();

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangBirthday = (e) => {
    setBirthday(e.target.value);
  };
  student.id = uuidv4();
  student.name = name;
  student.birthday = birthday;

  const handleSubmit = (e) => {
    e.preventDefault();
    // e.stopPropagation();
    setName("");
    setBirthday("");
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
                onChange={(e) => handleChangeName(e)}
                placeholder="Enter student"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Birthday</Form.Label>
              <Form.Control
                type="number"
                className="input"
                required
                onChange={(e) => handleChangBirthday(e)}
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

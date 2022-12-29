import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../redux/actions/update";
import Modal from "react-bootstrap/Modal";

export default function EditForm(props) {
  const state = useSelector((state) => state.StudentReducer);
  const dispatch = useDispatch();
  const student = state.students[props.flag];
  const id = state.students[props.flag].id;
  const [name, setName] = useState(state.students[props.flag].name);
  const [birthday, setBirthday] = useState(state.students[props.flag].birthday);

  student.id = id;
  student.name = name;
  student.birthday = birthday;
  console.log(student);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(update({ id: props.flag, student }));
    props.handleRevealForm(false);
  };
  return (
    <>
      <Modal
        className="main-modal"
        show={props.show}
        onHide={() => {
          props.handleRevealForm(false);
          props.handleClose;
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            className="form"
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Update Name</Form.Label>
              <Form.Control
                className="input"
                required
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter student"
                value={name}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Update Birthday</Form.Label>
              <Form.Control
                type="number"
                className="input"
                required
                onChange={(e) => setBirthday(e.target.value)}
                placeholder="Enter student"
                value={birthday}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Edit
            </Button>
          </form>
        </Modal.Body>
      </Modal>
      {/* <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="form"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Update Student</Form.Label>
          <Form.Control
            className="input"
            required
            onChange={(e) => {
              Setstudent(e.target.value);
            }}
            placeholder="Enter student"
            value={student}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Edit
        </Button>
      </form> */}
    </>
  );
}

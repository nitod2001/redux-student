import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addlist } from "../../redux/actions/addlist";
import Modal from "react-bootstrap/Modal";
import { v4 as uuidv4 } from "uuid";
import CallApi from "../../pages/api/ApiCaller";

export default function MainForm(props) {
  const [student, setStudent] = useState({
    id: uuidv4(),
    name: "",
    birthday: "",
  });
  const dispatch = useDispatch();

  const handleChangeName = (e) => {
    student.name = e.target.value;
  };

  const handleChangBirthday = (e) => {
    student.birthday = e.target.value;
  };

  const handleChangePoint = (e) => {
    student.point = e.target.value;
  };

  // const handleSubmit = (e) => {
  //   console.log(student);
  //   e.preventDefault();
  //   // e.stopPropagation();
  //   setStudent({});
  //   dispatch(addlist(student));
  //   document.querySelector(".input").value = "";
  //   props.handleClose();
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    CallApi("students", "POST", {
      id: student.id,
      name: student.name,
      birthday: student.birthday,
      point: student.point,
    }).then((res) =>
      CallApi("students", "GET", null).then((res) => {
        props.handleGetstudent(res.data);
        alert("Success");
      })
    );
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
                type="date"
                className="input"
                required
                onChange={(e) => handleChangBirthday(e)}
                placeholder="Enter student"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Point</Form.Label>
              <Form.Control
                min="0"
                max="10"
                type="number"
                step="0.1"
                className="input"
                required
                onChange={(e) => handleChangePoint(e)}
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

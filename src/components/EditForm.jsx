import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../redux/actions/update";
import Modal from "react-bootstrap/Modal";
import CallApi from "../../pages/api/ApiCaller";

export default function EditForm(props) {
  const state = useSelector((state) => state.StudentReducer);
  // const student = state.students[props.flag];
  const dispatch = useDispatch();
  const [students, Setstudents] = useState([]);
  var student = {};
  useEffect(() => {
    CallApi("students", "GET", null).then((res) => {
      Setstudents(res.data);
    });
  }, []);
  const [name, setName] = useState(student.name);
  const [birthday, setBirthday] = useState(student.birthday);
  const [point, setPoint] = useState(student.point);

  if (students.length > 0) {
    student = students[props.flag];
  }
  // const [name, setName] = useState(state.students[props.flag].name);
  // const [birthday, setBirthday] = useState(state.students[props.flag].birthday);

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(update({ id: props.flag, student }));
    CallApi(`students/${student.id}`, "PUT", {
      id: student.id,
      name: name,
      birthday: birthday,
      point: point,
    });
    props.handleRevealForm(false);
  };
  return (
    <>
      <Modal
        className="main-modal"
        show={props.show}
        onHide={() => {
          props.handleRevealForm(false);
          props.handleClose();
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
                onChange={(e) => {
                  setName(e.target.value);
                  student.name = e.target.value;
                }}
                placeholder="Enter student"
                value={student.name}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Update Birthday</Form.Label>
              <Form.Control
                type="date"
                className="input"
                required
                onChange={(e) => {
                  setBirthday(e.target.value);
                  student.birthday = e.target.value;
                }}
                placeholder="Enter student"
                value={student.birthday}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Update Point</Form.Label>
              <Form.Control
                min="0"
                max="10"
                type="number"
                step="0.1"
                className="input"
                required
                onChange={(e) => {
                  setPoint(e.target.value);
                  student.point = e.target.value;
                }}
                placeholder="Enter student"
                value={student.point}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Update
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

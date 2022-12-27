import React, { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addlist } from "../../redux/actions/addlist";

export default function MainForm() {
  const [student, setStudent] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setStudent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudent();
    dispatch(addlist(student));
    document.querySelector(".input").value = "";
  };
  return (
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
  );
}

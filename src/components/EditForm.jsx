import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import { update } from "../../redux/actions/update";

export default function EditForm(props) {
  const [revealForm, setrevealForm] = useState(true);
  const state = useSelector((state) => state.StudentReducer);
  const router = useRouter();
  const position = router.query.id;
  const dispatch = useDispatch();
  const [student, Setstudent] = useState(state.students[position]);
  props.handleRevealForm(revealForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(update({ id: position, student }));
    setrevealForm(false);
  };
  return (
    <form
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
    </form>
  );
}

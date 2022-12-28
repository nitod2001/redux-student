import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { Button, Container } from "react-bootstrap";
import { useRouter } from "next/router";
import { remove } from "../../redux/actions/remove";

export default function StudentBlock(props) {
  const [revealForm, setrevealForm] = useState(false);
  const state = useSelector((state) => state.StudentReducer);
  const router = useRouter();
  const position = router.query.id;
  const dispatch = useDispatch();
  props.handleRevealForm(revealForm);
  return (
    <>
      <h1>{state.students[position]}</h1>
      <Link className="btn-link" href="/">
        <Button className="btn-link-home">Home</Button>
      </Link>
      <br />

      <Button
        onClick={() => {
          setrevealForm(true);
        }}
        className="btn-link-home"
      >
        Edit
      </Button>

      <br />
      <Link className="btn-link" href="/">
        <Button
          onClick={() => {
            dispatch(remove(position));
          }}
          className="btn-link-remove"
        >
          Remove
        </Button>
      </Link>
    </>
  );
}

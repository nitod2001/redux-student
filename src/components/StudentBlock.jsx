import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { Button, Container } from "react-bootstrap";
import { useRouter } from "next/router";
import { remove } from "../../redux/actions/remove";

export default function StudentBlock(props) {
  let flag = 0;
  const state = useSelector((state) => state.StudentReducer);
  const router = useRouter();
  const position = router.query.id;
  const dispatch = useDispatch();
  const student = state.students.find((student, index) => {
    if (position === student.id) {
      flag = index;
      return student;
    }
  });
  props.handleFlag(flag);
  return (
    <>
      {student ? (
        <>
          <h1>Name : {student.name}</h1>
          <h2>Birthday: {student.birthday}</h2>
        </>
      ) : (
        ""
      )}
      <Link className="btn-link" href="/">
        <Button className="btn-link-home">Home</Button>
      </Link>
      <br />

      <Button
        onClick={() => {
          props.handleRevealForm(true);
        }}
        className="btn-link-home"
      >
        Edit
      </Button>

      <br />
      <Link className="btn-link" href="/">
        <Button
          onClick={() => {
            dispatch(remove(flag));
          }}
          className="btn-link-remove"
        >
          Remove
        </Button>
      </Link>
    </>
  );
}

import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import MainForm from "../components/MainForm";
import List from "../components/List";
import { Button } from "react-bootstrap";

export default function MainHome() {
  const state = useSelector((state) => state.StudentReducer);
  console.log(state);
  const students = state.students;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <>
      <Button onClick={() => (!show ? setShow(true) : setShow(false))}>
        Add Student
      </Button>
      {show ? <MainForm handleClose={handleClose} show={show}></MainForm> : ""}

      <List students={students}></List>
    </>
  );
}

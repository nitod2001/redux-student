import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import MainForm from "../components/MainForm";
import List from "../components/List";
import { Button } from "react-bootstrap";
import CallApi from "../../pages/api/ApiCaller";
import { addlist } from "../../redux/actions/addlist";

export default function MainHome() {
  // const state = useSelector((state) => state.StudentReducer);
  // const students = state.students;
  // const [state, setState] = useState();
  // const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  // const [a, setAlert] = useState(false);
  const [students, Setstudents] = useState([]);
  useEffect(() => {
    CallApi("students", "GET", null).then((res) => {
      Setstudents(res.data);
    });
  }, []);

  const handleClose = () => setShow(false);
  // const handleAlert = () => setAlert(true);
  // const handleAlertClose = () => setAlert(false);

  const handleGetstudent = (arr) => Setstudents(arr);
  return (
    <>
      <h1 className="heading">Student Manage Application</h1>
      {/* {a ? alert("Successful") : ""} */}
      <Button
        className="btn-link-home"
        onClick={() => (!show ? setShow(true) : setShow(false))}
      >
        Add Student
      </Button>
      {show ? (
        <MainForm
          // handleAlertClose={handleAlertClose}
          // handleAlert={handleAlert}
          handleGetstudent={handleGetstudent}
          handleClose={handleClose}
          show={show}
        ></MainForm>
      ) : (
        ""
      )}

      <List
        // handleAlertClose={handleAlertClose}
        // handleAlert={handleAlert}
        handleGetstudent={handleGetstudent}
        handleClose={handleClose}
        students={students}
      ></List>
    </>
  );
}

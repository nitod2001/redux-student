import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { Button, Container } from "react-bootstrap";
import { useRouter } from "next/router";
import { remove } from "../../redux/actions/remove";
import CallApi from "../../pages/api/ApiCaller";

export default function StudentBlock(props) {
  let flag = 0;
  // const state = useSelector((state) => state.StudentReducer);
  // console.log(state);
  const [students, Setstudents] = useState([]);
  useEffect(() => {
    CallApi("students", "GET", null).then((res) => Setstudents(res.data));
  }, []);

  const router = useRouter();
  const position = router.query.id;
  const dispatch = useDispatch();
  const handleRemove = (index) => {
    console.log(index);
    CallApi(`students/${index}`, "DELETE", null).then((res) =>
      console.log(res)
    );
  };
  const student = students.find((student, index) => {
    if (position === student.id) {
      flag = index;
      return student;
    }
  });
  props.handleFlag(flag);
  return (
    <>
      {student ? (
        <div className="student-block">
          <h1>Name : {student.name}</h1>
          <h2>
            Birthday <span>(YY/MM/DD)</span> : {student.birthday}{" "}
          </h2>
          <h2>Point : {student.point}</h2>
        </div>
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
          props.handleOpen();
        }}
        className="btn-link-home"
      >
        Edit
      </Button>

      <br />
      <Link className="btn-link" href="/">
        <Button
          onClick={() => {
            handleRemove(student.id);
            // dispatch(remove(flag));
          }}
          className="btn-link-remove"
        >
          Remove
        </Button>
      </Link>
    </>
  );
}

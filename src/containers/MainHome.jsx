import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addlist } from "../../redux/actions/addlist";
import MainForm from "../components/MainForm";
import List from "../components/List";

export default function MainHome() {
  const [student, setStudent] = useState("");
  const students = useSelector((state) => state.AddlistReducer);
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
  console.log(students);

  return (
    <>
      <MainForm></MainForm>
      <List students={students}></List>
    </>
  );
}

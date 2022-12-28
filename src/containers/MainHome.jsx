import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import MainForm from "../components/MainForm";
import List from "../components/List";

export default function MainHome() {
  const state = useSelector((state) => state.StudentReducer);
  const students = state.students;

  return (
    <>
      <MainForm></MainForm>
      <List students={students}></List>
    </>
  );
}

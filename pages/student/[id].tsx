import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

import EditForm from "../../src/components/EditForm";
import StudentBlock from "../../src/components/StudentBlock";

export default function Student() {
  const [revealForm, setrevealForm] = useState(false);
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  const handleRevealForm = (reveal: any) => {
    setrevealForm(reveal);
  };
  const [flag, setFlag] = useState(0);
  const handleFlag = (flag: any) => {
    setFlag(flag);
  };
  // console.log(revealForm);
  // console.log(show);

  return (
    <Container>
      {revealForm ? (
        <EditForm
          flag={flag}
          show={show}
          handleClose={handleClose}
          handleRevealForm={handleRevealForm}
        ></EditForm>
      ) : (
        <StudentBlock
          handleOpen={handleOpen}
          handleFlag={handleFlag}
          handleRevealForm={handleRevealForm}
        ></StudentBlock>
      )}
    </Container>
  );
}

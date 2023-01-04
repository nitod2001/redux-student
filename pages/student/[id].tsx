import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

import EditForm from "../../src/components/EditForm";
import StudentBlock from "../../src/components/StudentBlock";

export default function student() {
  const [revealForm, setrevealForm] = useState(false);
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const handleRevealForm = (reveal: any) => {
    setrevealForm(reveal);
  };
  const [flag, setFlag] = useState(0);
  const handleFlag = (flag: any) => {
    setFlag(flag);
  };

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
          handleFlag={handleFlag}
          handleRevealForm={handleRevealForm}
        ></StudentBlock>
      )}
    </Container>
  );
}

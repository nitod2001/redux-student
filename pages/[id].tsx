import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

import EditForm from "../src/components/EditForm";
import StudentBlock from "../src/components/StudentBlock";

export default function student() {
  const [revealForm, setrevealForm] = useState(false);

  const handleRevealForm = (reveal: any) => {
    setrevealForm(reveal);
  };

  return (
    <Container>
      {revealForm ? (
        <EditForm handleRevealForm={handleRevealForm}></EditForm>
      ) : (
        <StudentBlock handleRevealForm={handleRevealForm}></StudentBlock>
      )}
    </Container>
  );
}

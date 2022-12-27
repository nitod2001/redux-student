import Link from "next/link";
import React from "react";

import { Button, ListGroup } from "react-bootstrap";

export default function List(props) {
  console.log(props.students.length);
  return props.students.length > 0 ? (
    <ListGroup className="list">
      {props.students.map((student, index) => {
        return (
          <ListGroup.Item className="list-item" key={index}>
            {student}
            <Button>
              <Link className="list-item-link" href="/student">
                {" "}
                Detail
              </Link>
            </Button>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  ) : (
    <h2>No Students in List</h2>
  );
}

import Link from "next/link";
import React from "react";

import { Button, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { remove } from "../../redux/actions/remove";

export default function List(props) {
  const dispatch = useDispatch();

  return props.students.length > 0 ? (
    <ListGroup className="list">
      {props.students.map((student, index) => {
        // console.log(student, index);
        return (
          <Link key={index} className="list-link" href={`/${index}`}>
            <ListGroup.Item className="list-item">
              {student}
              <div className="list-btn-list">
                <Link className="btn-link" href={`/${index}`}>
                  <Button>Detail</Button>
                </Link>
                <Link className="btn-link" href="/">
                  <Button
                    onClick={() => {
                      dispatch(remove(index));
                    }}
                    className="btn-link-remove"
                  >
                    Remove
                  </Button>
                </Link>
              </div>
            </ListGroup.Item>
          </Link>
        );
      })}
    </ListGroup>
  ) : (
    <h2>No Students in List</h2>
  );
}

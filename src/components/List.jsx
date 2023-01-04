import Link from "next/link";
import React, { useState } from "react";

import { InputGroup, Form, Button, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { remove } from "../../redux/actions/remove";
import CallApi from "../../pages/api/ApiCaller";

export default function List(props) {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value.toUpperCase());
  };

  const handleRemove = (index) => {
    console.log(index);
    CallApi(`students/${index}`, "DELETE", null).then((res) =>
      CallApi("students", "GET", null).then((res) => {
        props.handleGetstudent(res.data);
        props.handleAlertClose();
      })
    );
    props.handleClose();
    props.handleAlert();
  };
  var flag = 0;

  return props.students.length > 0 ? (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          onChange={(e) => handleSearch(e)}
          placeholder="Search student"
          aria-label="Search student"
          aria-describedby="basic-addon2"
        />
      </InputGroup>
      {search === "" ? (
        <>
          <ListGroup className="list">
            {props.students.map((student, index) => {
              // console.log(student, index);
              flag += 1;
              return (
                <Link
                  key={index}
                  className="list-link"
                  href={`/student/${student.id}`}
                >
                  <ListGroup.Item className="list-item">
                    Name : {student.name}
                    <br />
                    Birthday: {student.birthday}
                    <div className="list-btn-list">
                      <Link
                        className="btn-link"
                        href={`/student/${student.id}`}
                      >
                        <Button>Detail</Button>
                      </Link>
                      <Link className="btn-link" href="/">
                        <Button
                          onClick={() => {
                            handleRemove(student.id);
                            // dispatch(remove(index));
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
        </>
      ) : (
        <>
          <ListGroup className="list">
            {props.students.map((student, index) => {
              // console.log(student, index);
              // console.log(search);
              if (student.name.toUpperCase().includes(search)) {
                flag += 1;
                return (
                  <Link
                    key={index}
                    className="list-link"
                    href={`/student/${student.id}`}
                  >
                    <ListGroup.Item className="list-item">
                      Name : {student.name}
                      <br />
                      Birthday: {student.birthday}
                      <div className="list-btn-list">
                        <Link
                          className="btn-link"
                          href={`/student/${student.id}`}
                        >
                          <Button>Detail</Button>
                        </Link>
                        <Link className="btn-link" href="/">
                          <Button
                            onClick={() => {
                              handleRemove(student.id);
                              // dispatch(remove(index));
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
              }
            })}
          </ListGroup>
          {flag === 0 ? (
            <h2>Can't Find</h2>
          ) : (
            <h2>{`${flag}/${props.students.length}`}</h2>
          )}
        </>
      )}
    </>
  ) : (
    <h2>No Students in List</h2>
  );
}

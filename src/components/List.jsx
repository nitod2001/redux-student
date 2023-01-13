import Link from "next/link";
import React, { useState } from "react";

import { InputGroup, Form, Button, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { remove, addlist } from "../../redux/actions/remove";
import CallApi from "../../pages/api/ApiCaller";
import jsPDF from "jspdf";

export default function List(props) {
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState("");
  const [searchPoint, setSearchPoint] = useState("");

  const handleSearchName = (e) => {
    setSearchName(e.target.value.toUpperCase());
  };

  const handleSearchPoint = (e) => {
    setSearchPoint(e.target.value);
  };
  const handleRemove = (index) => {
    console.log(index);
    CallApi(`students/${index}`, "DELETE", null).then((res) =>
      CallApi("students", "GET", null).then((res) => {
        props.handleGetstudent(res.data);
        dispatch(addlist(res.data));
        // props.handleAlert();
        alert("Success");
        // props.handleAlertClose();
      })
    );
    // props.handleClose();
    // props.handleAlert();
  };
  var flag = 0;
  //Array 1=>100
  const pointSort = [...props.students].sort((a, b) => a.point - b.point);
  //Array Alphabet
  // const nameSort = [...props.students].sort((a, b) =>
  //   a.name > b.name ? 1 : -1
  // );
  // console.log(nameSort);

  // function printDocument() {
  //   var doc = new jsPDF();
  //   doc.html(document.getElementById("divToPrint"), {
  //     async function(doc) {
  //       doc.save("mypdf.pdf");
  //     },
  //   });
  // }

  return props.students.length > 0 ? (
    <>
      <div className="search-input-block">
        <InputGroup className="mb-3">
          <Form.Control
            onChange={(e) => handleSearchName(e)}
            placeholder="Search student's name"
            aria-label="Search student's name"
            aria-describedby="basic-addon2"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            min="0.0"
            max="10.0"
            type="number"
            step="0.1"
            onChange={(e) => handleSearchPoint(e)}
            placeholder="Search student's point "
            aria-label="Search student's point"
            aria-describedby="basic-addon2"
          />
        </InputGroup>
      </div>
      {/* <Button onClick={printDocument}>Print</Button> */}
      {searchName === "" && searchPoint === "" ? (
        <>
          <ListGroup id="divToPrint" className="list">
            {pointSort.map((student, index) => {
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
                    <br />
                    Point : {student.point}
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
            {pointSort.map((student, index) => {
              if (
                student.name.toUpperCase().includes(searchName) &&
                student.point.includes(searchPoint)
              ) {
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
                      <br />
                      Point : {student.point}
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
            <h2>Can not Find</h2>
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

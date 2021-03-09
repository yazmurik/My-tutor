import React from 'react';
import {Link } from "react-router-dom";
import axios from 'axios';
import { useState, useHistory } from "react-router-dom";
import { baseURL, config} from "./services";
import {ListGroup, Col, Button} from "react-bootstrap";

function TutorInfo (props) {
  
  let history= useHistory();

  function pageReload() {
    return window.location.reload();
  }

  const removeLesson = async ()=>{
    let tutorUrl=`${baseURL}/${props.tutorInfo.id}`;
    await axios.delete(tutorUrl, config);
    history.push("/tutors");
    pageReload();
  }

  console.log(props)
  return (
    <div>
      <ListGroup>
      <Col md={{ span: 6, offset: 3 }}>
        <ListGroup.Item>{props.tutorInfo.fields.name}</ListGroup.Item>
        <ListGroup.Item>{props.tutorInfo.fields.lastName}</ListGroup.Item>
        <ListGroup.Item>{props.tutorInfo.fields.about}</ListGroup.Item>
        <ListGroup.Item>{props.tutorInfo.fields.lessons}</ListGroup.Item>
        <ListGroup.Item>{props.tutorInfo.fields.session}</ListGroup.Item>
        <ListGroup.Item>{props.tutorInfo.fields.price}</ListGroup.Item>
        <Button variant="danger" onClick={removeLesson}>Remove lesson</Button>
        <Link to={`/edit/${props.tutorInfo.id}`}>
          <Button variant="primary">Edit</Button>
        </Link>
        </Col>
      </ListGroup>
    </div>
  );
}

export default TutorInfo;
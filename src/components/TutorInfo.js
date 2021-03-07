import React from 'react';
import {Link } from "react-router-dom";
import { useState } from "react";
import {ListGroup, Col, Button} from "react-bootstrap";

function TutorInfo(props) {
  // console.log(props)
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
        <Button variant="danger">Remove lesson</Button>
        <Link to={`/edit/${props.tutorInfo.id}`}>
          <Button variant="primary">Edit</Button>
        </Link>
        
        </Col>
      </ListGroup>
      
    </div>
  );
}

export default TutorInfo;
import React from 'react';
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "./services";
import {ListGroup, Col, Button} from "react-bootstrap";
import {Link } from "react-router-dom";


function EditTutor(props) {
  const [name, setName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [lessons, setLessons] = useState(null);
  const [session, setSession] = useState(null);
  const [price, setPrice] = useState(null);
  const [about, setAbout] = useState(null);
  const [img, setImg] = useState(null);

  const params = useParams();
  const history = useHistory();

  useEffect(()=>{
    if(params.id){
      const tutor= props.data.find((tutor) => tutor.id === params.id);
      setName(tutor.fields.name);
      setLastName(tutor.fields.lastName);
      setLessons(tutor.fields.lessons);
      setSession(tutor.fields.sessions);
      setPrice(tutor.fields.price);
      setAbout(tutor.fields.about);
      setImg(tutor.fields.img);
    }
  }, [props.data, params.id]);
  function pageReload(){
    return window.location.reload();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // create a fields object, to send to airtable 😀
    const fields = {
      name,
      lastName,
      lessons,
      session,
      price,
      about,
      img
  
    }
    if (params.id) {
      const tutorUrl = `${baseURL}/${params.id}`;
      await axios.put(tutorUrl, { fields }, config);
    } else {
      await axios.post(baseURL, { fields }, config);
    }
    history.push("/Tutors");
    pageReload();
    
  };

  console.log(params.id);
  return (
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
  );
}

export default EditTutor;
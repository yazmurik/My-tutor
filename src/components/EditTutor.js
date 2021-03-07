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
    if(params.id && props.data.length > 0){
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
      <form onSubmit={handleSubmit} className="form">
        <input
          placeholder="Your Name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          placeholder="Your LastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />

        <input
          placeholder="Price"
          type="text"
          name="price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <input
          placeholder="Lessons"
          type="text"
          name="lessons"
          value={lessons}
          onChange={(e) => {
            setLessons(e.target.value);
          }}
        />
        <input
          placeholder="your image URL"
          type="text"
          name="img"
          value={img}
          onChange={(e) => {
            setImg(e.target.value);
          }}
        />
        <input
          placeholder="Session Duration"
          type="text"
          name="session"
          value={session}
          onChange={(e) => {
            setSession(e.target.value);
          }}
        />

        <input
          placeholder="About"
          type="text"
          name="about"
          value={about}
          onChange={(e) => {
            setAbout(e.target.value);
          }}
        />

        <input type="submit" value="Update" className="become" />
      </form>
        </Col>
      </ListGroup>
  );
}

export default EditTutor;
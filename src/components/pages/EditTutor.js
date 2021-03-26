import React from 'react';
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import {ListGroup, Col} from "react-bootstrap";
import {Link } from "react-router-dom";
import { Button, Checkbox, Form, TextArea } from 'semantic-ui-react'


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

  return (
    <ListGroup>
      <Col md={{ span: 6, offset: 3 }}>
          <Form>
            <Form.Field>
              <label>First Name</label>
              <input 
                placeholder='First Name' type="text"
                name="name"
                value={name}
                onChange={(e) => {
                setName(e.target.value);
              }}/>
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input placeholder='Last Name' 
              name="name"
              value={lastName}
              onChange={(e) => {
              setLastName(e.target.value);
            }}/>
            </Form.Field>
            <Form.Field>
              <label>Price</label>
              <input placeholder='Price' 
              name="name"
              value={price}
              onChange={(e) => {
              setPrice(e.target.value);
            }}/>
            </Form.Field>
            <Form.Field>
              <label>Lessons</label>
              <input placeholder='Lessons' 
              name="name"
              value={lessons}
              onChange={(e) => {
              setLessons(e.target.value);
            }}/>
            </Form.Field>
            <Form.Field>
              <label>Session Duration</label>
              <input placeholder='Session Duration' 
              name="name"
              value={session}
              onChange={(e) => {
              setSession(e.target.value);
            }}/>
            </Form.Field>
            <Form.Field>
              <label>About</label>
              <TextArea placeholder='Tell us more' 
              name="name"
              value={about}
              onChange={(e) => {
              setAbout(e.target.value);
            }}/>
            </Form.Field>
            <Form.Field>
              <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit' onClick={handleSubmit}>Update</Button>
          </Form>
        </Col>
      </ListGroup>
  );
}

export default EditTutor;
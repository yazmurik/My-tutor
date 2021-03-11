import React, {useState} from 'react';
import axios from 'axios';
import { baseURL, config} from "./services";
import { Button, Checkbox, Form, TextArea } from 'semantic-ui-react'
  import {ListGroup, Row,Col,} from "react-bootstrap";
import { useHistory } from "react-router-dom";


import './AddTutor.css'

function AddTutor(props) {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [price, setPrice] = useState("");
  const [lessons, setLessons] = useState("");
  const [about, setAbout] = useState("");
  const [img, setImg] = useState("");
  const [session, setSession] = useState("");
  const history = useHistory();
  

  async function handleSubmit(e) {
    e.preventDefault();
    let data = {
      name,
      lastName,
      price,
      lessons,
      about,
      img,
      session,
    };
    console.log(data);

    // axios({
    //   method: 'post',
    //   url: baseURL,
    //   data: data
    // });

    await axios.post(baseURL, { fields: data }, config);
    // props.setToggleFetch((prev) => !prev);
    history.push("/tutors");
  }

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
            <Button type='submit' onClick={handleSubmit}>Add Tutor</Button>
          </Form>
        </Col>
      </ListGroup>
)}

export default AddTutor;
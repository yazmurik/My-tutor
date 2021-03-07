import React, {useState} from 'react';
import axios from 'axios';
import { baseURL, config} from "./services";

import { useHistory } from "react-router-dom";
import {Button,Row,Col,Form,} from 'react-bootstrap'

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
    <div className="addForms">
      <Form>
      <Row>
      <Col md={{ span: 4, offset: 4 }}>
          <Form.Control placeholder="First name" onChange={(e)=>{setName(e.target.value)}} />
        </Col>
        </Row> 
        <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <Form.Control placeholder="Last name" onChange={(e)=>{setLastName(e.target.value)}} />
        </Col>
      </Row>
      <Row>
      <Col md={{ span: 4, offset: 4 }}>
          <Form.Control placeholder="Price" onChange={(e)=>{setPrice(e.target.value)}}/>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <Form.Control placeholder="Lessons" onChange={(e)=>{setLessons(e.target.value)}}/>
        </Col>
      </Row>
      <Row>
      <Col md={{ span: 4, offset: 4 }}>
          <Form.Control placeholder="About" onChange={(e)=>{setAbout(e.target.value)}}/>
        </Col>
      </Row>
      <Row>
      <Col md={{ span: 4, offset: 4 }}>
          <Form.Control placeholder="Image URL" onChange={(e)=>{setImg(e.target.value)}}/>
        </Col>
      </Row>
      <Row>
      <Col md={{ span: 4, offset: 4 }}>
          <Form.Control placeholder="Session" onChange={(e)=>{setSession(e.target.value)}}/>
        </Col>
      </Row>
      <Button onClick={handleSubmit}variant="outline-success">Submit</Button>
    </Form>
    </div>
    

)}

export default AddTutor;
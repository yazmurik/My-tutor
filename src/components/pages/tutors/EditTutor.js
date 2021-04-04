import React from 'react';
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "../../services";
import {Link } from "react-router-dom";
import { Button, Checkbox, Grid, Form, TextArea } from 'semantic-ui-react'


function EditTutor(props) {
  const [name, setName] = useState("");
  const [lessons, setLessons] = useState("");
  const [price, setPrice] = useState("");
  const [about, setAbout] = useState("");
  const [img, setImg] = useState("");

  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const history = useHistory();

useEffect(() => {
    if (params.id && props.data.length > 0) {
      const tutor = props.data.find((tutor) => tutor.id === params.id);
      setName(tutor.fields.name);
      setLessons(tutor.fields.lessons);
      setPrice(tutor.fields.price);
      setAbout(tutor.fields.about);
      setImg(tutor.fields.img);
    }
  }, [props.data, params.id]);
                           

  const handleSubmit = async (e) => {
    e.preventDefault();
    // create a fields object, to send to airtable 😀+
    const fields = {
      name,
      lessons,
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
    
  };

  return (
    <Grid centered columns={2}>
    <Grid.Column>
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
    </Grid.Column>
    </Grid>
          
  );
}

export default EditTutor;
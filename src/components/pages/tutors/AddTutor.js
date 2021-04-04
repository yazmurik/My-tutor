import React, { useState } from "react";
import axios from 'axios';
import {baseURL, config} from "../../services"
import { Button, Checkbox, Form, TextArea } from "semantic-ui-react";
import { Grid } from 'semantic-ui-react';
import { useHistory} from "react-router-dom";

import "../../AddTutor.css";

function AddTutor(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [lessons, setLessons] = useState("");
  const [about, setAbout] = useState("");
  const [img, setImg] = useState("");

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    let data = {
      name,
      price,
      lessons,
      about,
      img,
    };
    await axios.post(baseURL, { fields: data }, config);
      history.push("/tutors");
    }

  return (
    <Grid centered columns={2}>
    <Grid.Column>
      <Form>
          <Form.Field>
            <label>First Name</label>
            <input
              placeholder="First Name"
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Field>
          <Form.Field>
            <label>Price</label>
            <input
              placeholder="Price"
              name="price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </Form.Field>
          <Form.Field>
            <label>Lessons</label>
            <input
              placeholder="Lessons"
              name="lesson"
              value={lessons}
              onChange={(e) => {
                setLessons(e.target.value);
              }}
            />
          </Form.Field>
          <Form.Field>
            <label>About</label>
            <TextArea
              placeholder="Tell us more"
              name="about"
              value={about}
              onChange={(e) => {
                setAbout(e.target.value);
              }}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Button type="submit" onClick={handleSubmit}>
            Add Tutor
          </Button>
        </Form>
    </Grid.Column>
    </Grid>

        
  );
}

export default AddTutor;

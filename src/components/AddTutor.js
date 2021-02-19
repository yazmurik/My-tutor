import React, {useState} from 'react';
import axios from 'axios';
import {Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {baseURL, config} from "./services/index"
import './AddTutor.css'

function AddTutor() {

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
    await axios.post(baseURL, { fields: data }, config);
    // props.setToggleFetch((prev) => !prev);
    history.push("/tutors");
  }

  return (
    <div>
      <h3>Became a tutor with Us</h3>
      <div className="addTutorInputs">
        <input onChange={(e)=>{setName(e.target.value)}} placeholder="Your name" value={name}/>
        <input onChange={(e)=>{setLastName(e.target.value)}} placeholder="Last name" value={lastName}/>
        <input onChange={(e)=>{setPrice(e.target.value)}} placeholder="Price" value={price}/>
        <input onChange={(e)=>{setLessons(e.target.value)}} placeholder="Lessons" value={lessons}/>
        <input onChange={(e)=>{setAbout(e.target.value)}} placeholder="About" value={about}/>
        <input onChange={(e)=>{setImg(e.target.value)}} placeholder="img" value={img}/>
        <input onChange={(e)=>{setSession(e.target.value)}} placeholder="session" value={session}/>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default AddTutor;
import React from 'react';
import {Link } from "react-router-dom";
import {Card, Button} from 'react-bootstrap'
import './Tutors.css'


function Tutors(props) {
  return (
    <div>
      {props.data.map((tutor)=>{
        return(
          <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={tutor.fields.img} />
        <Card.Body>
          <Card.Title>{tutor.fields.name} ${tutor.fields.price}</Card.Title>

          <Card.Text>{tutor.fields.about}</Card.Text>
          <Link to={`/TutorInfo/${tutor.id}`}>
            <h5 onClick={(e)=>{
            if(e.target.textContent === tutor.fields.name){
              props.setTutorInfo(tutor)
            }
            }}
            >
              Go Tutor Info</h5>
          </Link>
        </Card.Body>
      </Card>
        )
      })}
      
    </div>
       
  );
}

export default Tutors;
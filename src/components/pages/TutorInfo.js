import React, {useState, useEffect, useLayoutEffect} from 'react'
import {Link } from "react-router-dom";
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
import { baseURL, config} from "../services";
import { Table, Grid } from 'semantic-ui-react'


function TutorInfo (props) {
   let history= useHistory();


  //Instead ComponentDidmount
  function pageReload() {
    return window.location.reload();
  }
  
  

  const removeLesson = async ()=>{
    let tutorUrl=`${baseURL}/${props.tutorInfo.id}`;
    await axios.delete(tutorUrl, config);
    history.push("/tutors");
    pageReload();
  }

  return (
    // <div>
    //   <ListGroup>
    //   <Col md={{ span: 4, offset: 4 }}>
    //     <ListGroup.Item>{props.tutorInfo.fields.name}</ListGroup.Item>
    //     <ListGroup.Item>{props.tutorInfo.fields.lastName}</ListGroup.Item>
    //     <ListGroup.Item>{props.tutorInfo.fields.about}</ListGroup.Item>
    //     <ListGroup.Item>{props.tutorInfo.fields.lessons}</ListGroup.Item>
    //     <ListGroup.Item>{props.tutorInfo.fields.session}</ListGroup.Item>
    //     <ListGroup.Item>{props.tutorInfo.fields.price}</ListGroup.Item>
    //     <Button variant="danger" onClick={removeLesson}>Remove lesson</Button>
    //     <Link to={`/edit/${props.tutorInfo.id}`}>
    //       <Button variant="primary">Edit</Button>
    //     </Link>
    //     </Col>
    //   </ListGroup>
    // </div>
    <Grid centered columns={2}>
    <Grid.Column>
      <Table fixed>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Lesson</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>{props.tutorInfo.fields.name}</Table.Cell>
        <Table.Cell>{props.tutorInfo.fields.lessons}</Table.Cell>
        <Table.Cell>{props.tutorInfo.fields.price}</Table.Cell>
        <Table.Cell>{props.tutorInfo.fields.about}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
    </Grid.Column>
    </Grid>


    
  );
}

export default TutorInfo;
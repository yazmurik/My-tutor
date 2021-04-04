import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import { Table, Grid, Button } from "semantic-ui-react";
import { baseURL, config } from "../../services";

function TutorInfo(props) {
  let params = useParams();
  let history= useHistory();

  const [loading, setLoading]= useState(true);
  const [data, setData]= useState([]);

  useEffect(() => {
    (async()=>{
      const resp = await axios.get(baseURL, config);
      setData(resp.data.records);
      setLoading(false);
    })();
  }, [])

  if(loading){
    return <h1>Loading</h1>;
  }

  const tutorInfo= data ? data.find((tutor) => tutor.id === params.id) : null;

  const removeLesson = async (id) =>{
    let tutorUrl = `${baseURL}/${id}`;
    await axios.delete(tutorUrl, config);
    history.push("/tutors");
  }

  return (
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
              <Table.Cell>{tutorInfo.fields.name}</Table.Cell>
              <Table.Cell>{tutorInfo.fields.lessons}</Table.Cell>
              <Table.Cell>{tutorInfo.fields.price}</Table.Cell>
              <Table.Cell>{tutorInfo.fields.about}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Button.Group centered>
          <Button onClick={() => removeLesson(params.id)}>Remove</Button>
          <Button.Or />
          <Link to={`/edit/${tutorInfo.id}`}>
            <Button positive>Edit</Button>
          </Link>
        </Button.Group>
      </Grid.Column>
    </Grid>
  )
}

export default TutorInfo;

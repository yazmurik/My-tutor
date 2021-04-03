import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import { Table, Grid, Button } from "semantic-ui-react";

function TutorInfo(props) {
  let params = useParams();

  useEffect(() => {
    props.getTutor(params.id);
  }, [props.tutorInfo && props.tutorInfo.id]);

  return (
    (!props.tutorInfo) ? null :
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
        <Button.Group centered>
          <Button onClick={() => props.deleteTutor(props.tutorInfo.id)}>Remove</Button>
          <Button.Or />
          <Link to={`/edit/${props.tutorInfo.id}`}>
            <Button positive>Edit</Button>
          </Link>
        </Button.Group>
      </Grid.Column>
    </Grid>
  )
}

export default TutorInfo;

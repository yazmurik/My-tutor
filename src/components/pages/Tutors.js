import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Tutors.css";
import { Header, Card, Grid,Container, Image, Icon, Button } from "semantic-ui-react";

const Tutors = (props) => {

  return (
    <div>
      <br />
      <div>
        <Header as="h1" color="teal">
          Find your Tutor, Find your Future
        </Header>
      </div>
      <hr />
      <Container>
        <Grid divided="vertically">
        <Grid.Row columns={3}>
          {props.data.map((tutor, index) => {
            return (
              <Grid.Column>
                <Card>
                  <Image
                    src="/images/avatar/large/daniel.jpg"
                    wrapped
                    ui={false}
                  />
                  <Card.Content>
                    <Card.Header>{tutor.fields.name}</Card.Header>
                    <Card.Meta>{tutor.fields.lessons}</Card.Meta>
                    <Card.Description>{tutor.fields.about}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Link to={`/TutorInfo/${tutor.id}`}>
                      <Button
                        icon
                        labelPosition="right"
                        onClick={(e) => {
                          if (e.target.textContent === "More Info...") {
                            props.setTutorInfo(tutor);
                          }
                        }}
                      >
                        More Info...
                        <Icon name="right arrow" />
                      </Button>
                    </Link>
                  </Card.Content>
                </Card>
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
      </Container>
      
    </div>
  );
};

export default Tutors;

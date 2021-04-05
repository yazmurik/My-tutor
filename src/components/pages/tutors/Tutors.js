import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { baseURL, config } from "../../services";

import "../../Tutors.css";
import {
  Header,
  Card,
  Grid,
  Container,
  Image,
  Icon,
  Button,
} from "semantic-ui-react";

const Tutors = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let mounted = true;
    const getData = async () => {
      let resp = await axios.get(baseURL, config);
      if (mounted) {
        setData(resp.data.records);
      }
    };
    getData();
    return () => {
      mounted = false;
    };
  }, [data])

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
            {data ? data.map((tutor, index) => {
              return (
                <Grid.Column key={index}>
                  <Card>
                    <Image
                      src={tutor.fields.img}
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
                          labelPosition="right">
                          More Info...
                          <Icon name="right arrow" />
                        </Button>
                      </Link>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              );
            })
          : null}
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default Tutors;

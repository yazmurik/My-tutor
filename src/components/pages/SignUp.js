import React, { useState } from 'react'
import { Button, Form, Grid } from 'semantic-ui-react'
import axios from 'axios'

export default function SignUp() {
  const[fullName, setFullName]= useState("");
  const[username, setUsername]= useState("");
  const[email, setEmail]= useState("");
  const[password, setPassword]= useState("");
  
  const onSubmit=(e)=>{
    e.preventDefault();

    const registered={
      fullName,
      username,
      email,
      password
    }

    axios.post("http://localhost:3000/app/signup", registered)
    .then(response=> console.log(response.data))

    window.location= '/'
  }
  console.log(email)
  return (
    <div>
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={10}>
            <Form onSubmit={onSubmit}>
              <Form.Field>
                <label>Full Name</label>
                <input 
                placeholder="Full Name"
                value={fullName} 
                onChange={(e)=>{
                  setFullName(e.target.value)}}/>
              </Form.Field>
              <Form.Field>
                <label>Username</label>
                <input 
                placeholder="Username" 
                value={username}
                onChange={(e)=>{
                  setUsername(e.target.value)}}
                />
              </Form.Field>
              <Form.Input 
              label="Email" 
              placeholder="joe@schmoe.com" 
              onChange={(e)=>{
                setEmail(e.target.value)}}/>
              <Form.Field>
                <label>Password</label>
                <input 
                placeholder="Password" 
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)}}
                />
              </Form.Field>
              <Button type="submit">Sign up</Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

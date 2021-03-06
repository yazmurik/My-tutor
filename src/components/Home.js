import React from 'react';
import {Link } from "react-router-dom";
import './Home.css'
import {TextField} from '@material-ui/core';

function Home() {
  return (
    <TextField id="outlined-search" 
    label="Search field" 
    type="search"
     variant="outlined" />
  );
}

export default Home;
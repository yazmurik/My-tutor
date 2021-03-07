import React from 'react';
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
import React from 'react';
import './Home.css'
import {TextField} from '@material-ui/core';

function Home() {
  return (
    <div class="ui icon input">
      <input type="text" placeholder="Search..."/>
      <i aria-hidden="true" class="search icon"></i>
      </div>

  );
}

export default Home;
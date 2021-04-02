import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import './Home.css';

const useStyles= makeStyles((theme) =>({

}))

function Home() {
  return (
    <div>
      <br/>
      <div className="ui icon input">
      <input type="text" placeholder="Search..."/>
      <i aria-hidden="true" className="search icon"></i>
      </div>
      <div>
        <h1>Welcome to <br/> My <span></span>Tutor.</h1>
      </div>
    </div>
  );
}

export default Home;
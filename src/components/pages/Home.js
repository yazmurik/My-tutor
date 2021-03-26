import React from 'react';
import '../Home.css'

function Home() {
  return (
    <div className="ui icon input">
      <input type="text" placeholder="Search..."/>
      <i aria-hidden="true" className="search icon"></i>
      </div>

  );
}

export default Home;
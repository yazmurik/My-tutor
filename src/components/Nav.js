import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './Nav.css'

function Nav() {
const [click, setClick]= useState(false);

const handleClick=()=>{
  setClick(!click)
}
  return (
        <nav className="navbar">
          <div>
            <ul className = 'nav_links'>
              <li><Link className="btnHome" to='/'>Home</Link></li>
            <li><Link className="btnTutors" to='/tutors'>Tutors</Link></li>
            <li><Link className="btnTrivia" to='/trivia'>Trivia</Link></li>
              <li><Link className="btnAdd" to='/AddTutor'>Add Tutor</Link></li>
          </ul>
          </div>
          <div >
            <button className="signBtn">
              <h5 onClick={handleClick}>{click ? "Log Out" : "Sign Up"}</h5>
            </button>
            
          </div>
          
        </nav>
    
    
  );
}

export default Nav;
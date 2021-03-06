import React from 'react';
import {Link } from "react-router-dom";
import {Card, Button, Navbar,NavDropdown,Form,FormControl} from 'react-bootstrap'
import './Nav.css'

function Nav() {
  return (
    <div>
      <header>
        <nav>
          <ul className = 'nav_links'>
              <li><Link className="btnHome" to='/'>Home</Link></li>
            <li><Link className="btnTutors" to='/tutors'>Tutors</Link></li>
            <li><Link className="btnTutors" to='/trivia'>Trivia</Link></li>
              <li><Link className="btnAdd" to='/AddTutor'>Add Tutor</Link></li>
            </ul>
        </nav>
      </header>
    </div>
    
    
  );
}

export default Nav;
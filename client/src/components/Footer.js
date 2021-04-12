import React from "react";
import './Footer.css';
import {Link} from 'react-router-dom'


function Footer (){
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="list-unstyled">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/tutors'>Tutors</Link></li>
            <li><Link to='/trivia'>Trivia</Link></li>
              <li><Link to='/AddTutor'>Add Tutor</Link></li>
            </ul>
          </div>
          <div className="col">
            <ul className="list-unstyled">
              <li>123-321-4567</li>
              <li>Brooklyn/NY</li>
              <li>123 Main Street South North</li>
            </ul>
          </div>
        </div>
        <hr/>
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} TUTOR INC | All rights reserved | Terms Of Service | Privacy.
          </p>
        </div>
      </div>
    </div>

  )
}

export default Footer;
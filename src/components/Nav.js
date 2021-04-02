import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton,MenuItem } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import "./Nav.css";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "none",
    display: 'flex',
  },
}));

function Nav() {
  const classes = useStyles();
  return (
    <div>
        <nav className="navbar">
          <div>
            <ul className="nav_links">
             <li>
                 <Link className="btnHome" to="/">
                   Home
                 </Link>
               </li>
             <li>
                <Link className="btnTutors" to="/tutors">
                  Tutors
                </Link>
              </li>
              <li>
                <Link className="btnTrivia" to="/trivia">
                  Trivia
                </Link>
              </li>
              <li>
                <Link className="btnAdd" to="/AddTutor">
                  Add Tutor
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Link to="/signup">
              <button className="signBtn">
                <h5> Sign Up</h5>
              </button>
            </Link>
          </div>
        </nav>
    </div>
  );
}

export default Nav;

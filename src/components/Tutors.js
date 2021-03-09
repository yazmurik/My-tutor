import React, { useState } from "react";
import {Link } from "react-router-dom";
import './Tutors.css'
import { Card, Icon, Grid, Image } from 'semantic-ui-react'

function Tutors(props) {

  const [search, setSearch] = useState(""); 
  const [value, setValue] = useState("");

  function searchInput(e) {
    setSearch(e.target.value);
    let filterResult= props.data.filter((tutor)=>
    tutor.fields.lessons.toLowerCase().includes(search))
  }
  return (
    <div>
      <div className="searchBar">
        <div class="ui icon input">
          <input type="text" placeholder="Search..." onChange={searchInput}/>
          <i aria-hidden="true" class="search icon"></i>
        </div>
      </div>
      {props.data &&
          props.data
            .filter((tutor) =>
              tutor.fields.lessons.toLowerCase().includes(search)
            )
            .map((tutor)=>{
        return(
          <div class="card">
            <img src="img_avatar.png" alt="" />
            <div class="container">
              <h4><b>{tutor.fields.name}</b></h4> 
              <p>{tutor.fields.lessons}</p> 
            </div>
            <br/>
             <Link to={`/TutorInfo/${tutor.id}`}>
               <div class="p-2">
                 <button class="btn btn-info pd" onClick={(e)=>{
                    if (e.target.textContent === tutor.fields.name){
                      props.setTutorInfo(tutor)
                    }
                  }}
                   >{tutor.fields.name}</button>
               </div>
                </Link>    
          </div>          
        )
      })}
    </div>
    
       
  );
}

export default Tutors;
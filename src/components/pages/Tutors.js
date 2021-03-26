import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Tutors.css";
import { Header } from "semantic-ui-react";

const Tutors = (props) => {
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");

  return (
    <div>
      <br />
      <div>
        <Header as="h1" color="teal">
          Find your Tutor, Find your Future
        </Header>
      </div>

        {  props.data.map((tutor, index) => {
            return (
              <div className="card" key={`${index}`}>
                <img src="img_avatar.png" alt="" />
                <div className="container">
                  <h4>
                    <b>{tutor.fields.name}</b>
                  </h4>
                  <p>{tutor.fields.lessons}</p>
                </div>
                <br />
                <Link to={`/TutorInfo/${tutor.id}`}>
                  <div className="p-2">
                    <button
                      className="btn btn-info pd"
                      onClick={(e) => {
                        if (e.target.textContent === "More Info...") {
                          props.setTutorInfo(tutor);
                        }
                      }}
                    >
                      More Info...
                    </button>
                  </div>
                </Link>
              </div>
            );
          })}
    </div>
  );
};

export default Tutors;

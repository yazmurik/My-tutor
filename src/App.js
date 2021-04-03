import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { baseURL, config } from "./components/services";
import Nav from './components/Nav';
import AddTutor from './components/pages/tutors/AddTutor';
import EditTutor from './components/pages/tutors/EditTutor';
import Home from './components/pages/Home/Home';
import Payment from './components/Payment';
import TutorInfo from './components/pages/tutors/TutorInfo';
import Tutors from './components/pages/tutors/Tutors';
import Trivia from './components/pages/Trivia'
import { Route} from "react-router-dom";
import Footer from "./components/Footer"
import SignUp from './components/pages/SignUp';
import { makeStyles} from '@material-ui/core/styles';
import Image from './bg.jpg';

const useStyles = makeStyles((theme) => ({
  root:{
    minHeight: '100vh',
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
}))


function App() {
  const classes= useStyles();
  const history = useHistory();
  const [tutors, setTutors] = useState([]);
  const [tutorInfo, setTutorInfo] = useState();

  const getTutor = async (id) => {
    let resp = await axios.get(`${baseURL}/${id}`, config)
    setTutorInfo(resp.data)
  };

  const getTutors = async () => {
    let resp = await axios.get(baseURL, config);
    console.log("getTutors: ", resp)
    setTutors(resp.data.records);
  };

  const addTutor = async (data)=>{
    let resp = await axios.post(baseURL, { fields: data }, config);
    setTutors(tutors => [...tutors,  resp.data])
    history.push("/tutors");
  }
  
  const deleteTutor = async (id) => {
    let tutorUrl = `${baseURL}/${id}`;
    await axios.delete(tutorUrl, config);
    history.push("/tutors");
  }

  return (
    <div className={classes.root}>
      <div className="page-container">
      <div className="content-wrap">
          <Nav/>
        <Route path='/edit/:id'>
          <EditTutor 
          tutorInfo={tutorInfo}
          setTutorInfo={setTutorInfo}
          getTutor={getTutor}
          />
          </Route>
        <Route path="/tutors">
          <Tutors 
            tutors={tutors}
            getTutors={getTutors}
            setTutorInfo={setTutorInfo}
          />
        </Route>
        <Route path="/trivia">
          <Trivia/>
        </Route>
        <Route path="/AddTutor" >
          <AddTutor addTutor={addTutor}/>
        </Route>
        <Route path="/TutorInfo/:id" >
          <TutorInfo 
            tutorInfo={tutorInfo}
            getTutor={getTutor}
            deleteTutor={deleteTutor}
          />
        </Route>
        <Route path="/Payment"  >
          <Payment />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/SignUp" >
          <SignUp />
        </Route>
      </div>
      <Footer/>
    </div>
    </div>
    
  );
}

export default App;

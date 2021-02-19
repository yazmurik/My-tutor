import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios';
import 
import {baseURL, config} from "./services"
import Nav from './components/Nav';
import AddTutor from './components/AddTutor';
import EditTutor from './components/EditTutor';
import Home from './components/Home';
import Payment from './components/Payment';
import TutorInfo from './components/TutorInfo';
import Tutors from './components/Tutors';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let resp = await axios.get(baseURL, config
      );
      // console.log(resp.data.records);
      setData(resp.data.records);
    }
    getData();
  }, []);
  console.log('main data is',data)

  return (
    <div className="App">
      <Nav/>
      <Route path='/edit/:id'>
        <EditTutor />
        </Route>
      <Route path="/tutors">
        <Tutors/>
      </Route>
      <Route path="/AddTutor" >
        <AddTutor />
      </Route>
      <Route path="/TutorInfo" >
        <TutorInfo  />
      </Route>
      <Route path="/Payment"  >
        <Payment />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </div>
  );
}

export default App;

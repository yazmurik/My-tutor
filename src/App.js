import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios';
import { baseURL, config} from "./components/services";
import Nav from './components/Nav';
import AddTutor from './components/pages/AddTutor';
import EditTutor from './components/pages/EditTutor';
import Home from './components/pages/Home';
import Payment from './components/Payment';
import TutorInfo from './components/pages/TutorInfo';
import Tutors from './components/pages/Tutors';
import Trivia from './components/pages/Trivia'
import { Route} from "react-router-dom";
import Footer from "./components/Footer"


function App() {
  const [data, setData] = useState([]);
  const [tutorInfo, setTutorInfo] =useState("");
  const[total,setTotal] = useState(null);


  useEffect(() => {
    const getData = async () => {
      let resp = await axios.get(baseURL,config);
      // console.log(resp.data.records);
      setData(resp.data.records);
    }
    getData();
  }, []);
  console.log('main data is',data)

  return (
    <div className="page-container">
      <div className="content-wrap">
          <Nav/>
        <Route path='/edit/:id'>
          <EditTutor data={data}/>
          </Route>
        <Route path="/tutors">
          <Tutors data={data} setTutorInfo={setTutorInfo}/>
        </Route>
        <Route path="/trivia">
          <Trivia/>
        </Route>
        <Route path="/AddTutor" >
          <AddTutor />
        </Route>
        <Route path="/TutorInfo" >
          <TutorInfo tutorInfo={tutorInfo}  total={total}/>
        </Route>
        <Route path="/Payment"  >
          <Payment />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

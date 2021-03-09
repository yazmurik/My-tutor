import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios';
import { baseURL, config} from "./components/services";
import Nav from './components/Nav';
import AddTutor from './components/AddTutor';
import EditTutor from './components/EditTutor';
import Home from './components/Home';
import Payment from './components/Payment';
import TutorInfo from './components/TutorInfo';
import Tutors from './components/Tutors';
import Trivia from './components/Trivia'
import { Route} from "react-router-dom";


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
    <div className="App">
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
  );
}

export default App;

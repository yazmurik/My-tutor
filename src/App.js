import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios';
import { baseURL, config} from "./components/services";
import Nav from './components/Nav';
import AddTutor from './components/pages/AddTutor';
import EditTutor from './components/pages/EditTutor';
import Home from './components/pages/Home/Home';
import Payment from './components/Payment';
import TutorInfo from './components/pages/TutorInfo';
import Tutors from './components/pages/Tutors';
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

  const [data, setData] = useState([]);
  const [tutorInfo, setTutorInfo] =useState("");
  const[total,setTotal] = useState(null);


  useEffect(() => {
    const getData = async () => {
      let resp = await axios.get(baseURL,config);
      setData(resp.data.records);
    }
    getData();
  }, []);
  console.log('main data is',data)

  return (
    <div className={classes.root}>
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
          <TutorInfo tutorInfo={tutorInfo} data={data}  total={total}/>
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

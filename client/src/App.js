import React, {useState, useEffect} from 'react'
import { Nav, Footer, Payment } from "./components";
import { Home, AddTutor, EditTutor, TutorInfo, Tutors, Trivia, SignUp } from "./pages"; 
import { baseURL, config } from "./services";
import { Route} from "react-router-dom";
import { makeStyles} from '@material-ui/core/styles';
import axios from 'axios';
import Image from './bg.jpg';
import "./App.css";

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

  useEffect(() => {
    (async () => {
      try {
        const resp = await axios.get(baseURL, config);
        setData(resp.data.records);
        
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log("main data is", data);

  return (
    <div className={classes.root}>
      <div className="page-container">
      <div className="content-wrap">
          <Nav/>
        <Route exact path="/" component={Home} />
        <Route path='/edit/:id'>
          <EditTutor data={data} />
        </Route>
        <Route path="/tutors" component={Tutors} />
        <Route path="/trivia" component={Trivia} />
        <Route path="/AddTutor" component={AddTutor} />
        <Route path="/TutorInfo/:id" component={TutorInfo} />
        <Route path="/Payment" component={Payment} />
        <Route path="/register" component={SignUp} />
      </div>
      <Footer/>
    </div>
    </div>
    
  );
}

export default App;

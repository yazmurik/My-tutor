import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./Home.css";
import CarouselImg from "../../components/Carousel/CarouselImg";

const useStyles = makeStyles((theme) => ({}));

function Home() {
  return (
    <>
      <br />
      <div>
        <h1 className="display-4 my-3">
          Welcome to My<span>Tutor.</span>
        </h1>
      </div>
      <CarouselImg />
    </>
  );
}

export default Home;

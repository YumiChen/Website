import {Component} from "react";
import ScrollContainer from "./ScrollContainer";

const About = (props)=>{
    return(
      <div className="about">
        <div className="avatar">
          <img src="https://s6.postimg.cc/iaqdzh37l/avatar.jpg" alt="yumichen artist front-end-engineer"></img>
        </div>
        <div className="info">
        <ScrollContainer comp={
          <div>
            <h2>Yumi Chen</h2>
            <p># Artist / Front-end developer 
              <br/>
              <br/>希望能每天睡到自然醒的工程師。 
              <br/>Casual illustration artist.
            </p>
          </div>
        }/>
        </div>
      </div>
    );
  }

  module.exports = About;
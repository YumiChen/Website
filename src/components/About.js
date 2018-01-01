import {Component} from "react";
import ScrollContainer from "./ScrollContainer";

const About = (props)=>{
    return(
      <div className="about">
        <div className="avatar"/>
        <div className="info">
        <ScrollContainer comp={
          <div>
            <h3>Yumi Chen</h3>
            <p>Developer who's learning React.</p>
          </div>
        }/>
        </div>
      </div>
    );
  }

  module.exports = About;
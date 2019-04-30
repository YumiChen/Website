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
              <br/>興趣繪畫的工程師, 希望能繼續分享更多作品。
              <br/>夢想是每天睡八小時以上睡到自然醒。 
            </p>
          </div>
        }/>
        </div>
      </div>
    );
  }

  module.exports = About;
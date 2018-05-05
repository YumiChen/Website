import {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import changeImg from "../actions/changeImg";
import ScrollContainer from "../components/ScrollContainer";

const imgs=[
    "https://s6.postimg.cc/bqh9924xt/p18.jpg",
  "https://s6.postimg.cc/6dseuxh1d/p16.jpg",
  "https://s6.postimg.cc/hd8k9f14x/愛_.jpg",
  "https://s6.postimg.cc/gxxagef7l/satr_vs_the_Xmas.png",
  "https://s6.postimg.cc/7skc8smf5/001.jpg",
  "https://s6.postimg.cc/rfncc5g1t/GE1.jpg",
  "https://s6.postimg.cc/i41af73i9/08.jpg",
  "https://s6.postimg.cc/beuqz6i69/013_.jpg" ,
  "https://s6.postimg.cc/g69vpkv0h/juan01.jpg"], 
      navs = ["Top","About","Works","Contact"];
  
  const totalImgNum = imgs.length;
  let styles = imgs.map((img)=>{
    return {
      backgroundImage:'url('+img+')'
    };
  });

  let Works = (props)=>{
     let works = imgs.map((img,index)=>{
       return (
        <ScrollContainer 
        key = {index}
        comp={
          <div
          className="piece"
         style={styles[index]}
          onClick={props.changeImg}
          data-key = {index}
          />
        } cls={"float"+(index%3)}/>
      );
       }
     );
     return(
       <div className="works">
         <ScrollContainer comp={<p>Illustrations</p>} cls="underlined"/>
         <div className="pieces">
          {works}
         </div>
       </div>
     );
   }
   
   const mapDispatchToProps_works = (dispatch)=>{
     return bindActionCreators({changeImg:changeImg},dispatch);
   }
   
   Works = connect(null,mapDispatchToProps_works)(Works);

   module.exports = Works;
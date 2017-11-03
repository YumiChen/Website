import {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import changeImg from "../actions/changeImg";

const imgs=[
    "https://s6.postimg.org/bqh9924xt/p18.jpg",
  "https://s6.postimg.org/6dseuxh1d/p16.jpg",
  "https://s6.postimg.org/hd8k9f14x/愛_.jpg",
  "https://s6.postimg.org/gxxagef7l/satr_vs_the_Xmas.png",
  "https://s6.postimg.org/7skc8smf5/001.jpg",
  "https://s6.postimg.org/rfncc5g1t/GE1.jpg",
  "https://s6.postimg.org/i41af73i9/08.jpg",
  "https://s6.postimg.org/beuqz6i69/013_.jpg" ,
  "https://s6.postimg.org/g69vpkv0h/juan01.jpg"], 
      navs = ["Top","About","Works","Contact"];
  
  const totalImgNum = imgs.length;
  let styles = imgs.map((img)=>{
    return {
      backgroundImage:'url('+img+')'
    };
  });

  let Works = (props)=>{
     let works = imgs.map((img,index)=>{
       return (<div
         className="piece"
         style={styles[index]}
         onClick={props.changeImg}
         data-key = {index}
         key = {index}
         />);
       }
     );
     return(
       <div className="works">
         <p>Illustrations</p>
         {works}
       </div>
     );
   }
   
   const mapDispatchToProps_works = (dispatch)=>{
     return bindActionCreators({changeImg:changeImg},dispatch);
   }
   
   Works = connect(null,mapDispatchToProps_works)(Works);

   module.exports = Works;
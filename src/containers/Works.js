import {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import changeImg from "../actions/changeImg";
import ScrollContainer from "../components/ScrollContainer";
import imgs from "../data/imgs";

const navs = ["Top","About","Works","Contact"];
  
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
          onClick={props.changeImg.bind(null, index)}
          >
            <img src={img.url} alt="name"/>
          </div>
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
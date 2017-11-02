import {Component} from "react";

class NavBtn extends Component{
    constructor(props){
      super(props);
    }
      showNav(event){
      let nav = document.querySelector(".nav"),
      page = document.querySelector(".page");
   page.style.filter="blur(2px)";
        nav.classList.add("showNav");
    }
    render(){
      return (<div className="navbtn">
          <i className="fa fa-bars " aria-hidden="true" onClick={this.showNav}></i></div>);
    }
  }

  module.exports = NavBtn;
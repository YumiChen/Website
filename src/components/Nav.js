import {Component} from "react";

const navs = ["Top","About","Works","Contact"];

class Nav extends Component{
    constructor(props){
      super(props);
      this.scrollToElement = this.scrollToElement.bind(this);
    }
    showNav(event){
      let nav = document.querySelector(".nav"),
      page = document.querySelector(".page");
    nav.classList.remove("showNav");
     page.style.filter="blur(0px)";
    }
    scrollToElement(event){
      const name = event.target.innerHTML.toLowerCase();
   (document.querySelector('.'+name)).scrollIntoView({ 
      behavior: 'smooth' 
        });
      
      const nav = document.querySelector(".nav"),
      page = document.querySelector(".page"); page.style.filter="blur(0px)";
      nav.classList.remove("showNav");
    }
    render(){
      let nav = navs.map((nav)=>{
        return (
          <div className="navItem" onClick={this.scrollToElement}>
            {nav}
          </div>);
        }
      );
      return(
          <div className="nav">
          <i className="fa fa-times" aria-hidden="true" onClick={this.showNav}></i>
          {nav}
          </div>
      );
    }
  }

  module.exports = Nav;
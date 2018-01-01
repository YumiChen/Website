import {Component} from "react";

class NavBtn extends Component{
    constructor(props){
      super(props);
      this.state = {scrolled: false};
      window.onscroll = (e)=>{
        if(window.pageYOffset === 0) this.setState({scrolled: false});
        else{
          if(!this.state.scrolled) this.setState({
            scrolled: true
          });
        }
      }
    }
    showNav(event){
      let nav = document.querySelector(".nav"),
      page = document.querySelector(".page"),
      canvas = document.querySelector("canvas");
      page.style.filter="blur(2px)";
      page.style.cursor="pointer";
      nav.classList.add("showNav");
      canvas.style.display = "block";

      page.onclick = function handler(){
        nav.classList.remove("showNav");
        page.style.filter="blur(0px)";
        page.style.cursor="auto";
        page.onclick = null;
        canvas.style.display = "none";
      };
    }
    render(){
      return (
        <div className="navbtn">
            <i className={this.state.scrolled?"fa fa-bars navScrolled":"fa fa-bars"}
              aria-hidden="true" 
              onClick={this.showNav}
            />
        </div>);
    }
  }

  module.exports = NavBtn;
import {Component} from "react";

const navs = ["Top","About","Works","Contact"];

class Nav extends Component{
    constructor(props){
      super(props);

      this.animateBubbles = this.animateBubbles.bind(this);
      this.scrollToElement = this.scrollToElement.bind(this);
    }
    componentDidMount(){
      this.animateBubbles();
    }
    animateBubbles(){
      var canvas = document.querySelector("canvas"),
      ctx = canvas.getContext('2d'),
      width = window.innerWidth,
      height = window.innerHeight,
      bubbles = [];  
    
      canvas.width=width;
      canvas.height=height;
    
      function Bubble(){
        this.x = width * Math.random();
        this.y = height;
        this.speedY = Math.random() * 5;
        this.speedX = Math.random() * 2;
        this.accX = Math.random() * -0.3;
        this.r = Math.random() * 8 + 2;
        this.opa = Math.random() - 0.1;
      }
      Bubble.prototype.float = function(){
        this.y -= this.speedY;
        this.x += this.speedX - 1;
        if(this.speedX < 0 || this.speedX >1) this.accX *= -1;
        this.speedX+= this.accX;
        if(this.y < 0){
          this.y = height;
          this.x = width * Math.random();
        }
      }
      // create bubbles
      for(let i=0;i<20;i++){
        bubbles.push(new Bubble());
      }
      
      function draw(){
        if(canvas.style.display !="none"){
          ctx.clearRect(0,0,width,height);
          ctx.strokeStyle = "rgba(255,255,255,0.7)";
          bubbles.forEach(function(bubble){ 
            ctx.fillStyle = "rgba(255,255,255,"+bubble.opa+")";
            bubble.float();
            ctx.beginPath();
            ctx.arc(bubble.x,bubble.y,bubble.r,0,2*Math.PI);
            ctx.fill();
            ctx.stroke();
          });
        }
          requestAnimationFrame(draw);
      }
      
      requestAnimationFrame(draw);
      
      function resize(){
          width=window.innerWidth;
          height=window.innerHeight;
          canvas.width=width;
          canvas.height=height;
      }
      
      window.addEventListener('resize',resize);
    }
    hideNav(event){
      const nav = document.querySelector(".nav"),
        page = document.querySelector(".page"),
        canvas = document.querySelector("canvas"); 
      nav.classList.remove("showNav");
      page.style.filter="blur(0px)";
      page.style.cursor="auto";
      page.onclick = null;
      canvas.style.display = "none";
    }
    scrollToElement(event){
      const name = event.target.innerHTML.toLowerCase();
   (document.querySelector('.'+name)).scrollIntoView({ 
      behavior: 'smooth' 
        });
      
      const nav = document.querySelector(".nav"),
        page = document.querySelector(".page"),
        canvas = document.querySelector("canvas"); 
      page.style.filter="blur(0px)";
      nav.classList.remove("showNav");
      page.style.cursor="auto";
      page.onclick = null;
      canvas.style.display = "none";
    }
    render(){
      let nav = navs.map((nav,index)=>{
        return (
          <div className="navItem" onClick={this.scrollToElement} key={index}>
            {nav}
          </div>);
        }
      );
      return(
          <div className="nav">
          <canvas 
            style={{
              position: "absolute", 
              transform: "translateY(-2em)", 
              filter: "blur(1px)"
            }} 
            ref={(canvas)=>{canvas=this.canvas}}/>
          <i className="fa fa-times" aria-hidden="true" onClick={this.hideNav}></i>
          {nav}
          </div>
      );
    }
  }

  module.exports = Nav;
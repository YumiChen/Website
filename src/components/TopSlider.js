import {Component} from "react";
import debounce from "../functions/debounce";
import Slider from "react-slick";

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

class TopSlider extends Component {
    constructor(props){
      super(props);
    }
    componentWillmount(){
   window.removeEventListener("resize",
      debounce(()=>{this.forceUpdate();},1000)
      );
    }
    componentDidMount(){
   window.addEventListener("resize",
      debounce(()=>{this.forceUpdate();},1000)
      );
    }
    render() {
      let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div className="top">
          <h1>Azure <br/>Seasons</h1>
        <Slider {...settings} className=" sliderBox">
        <div className="img" style={styles[0]}/>
          <div className="img" style={styles[1]}/>
          </Slider>
      </div>
      );
    }
  }

  module.exports = TopSlider;
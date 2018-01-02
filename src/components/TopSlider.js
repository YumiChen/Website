import {Component} from "react";
import debounce from "../functions/debounce";
import Slider from "react-slick";
import ScrollContainer from "./ScrollContainer";

class TopSlider extends Component {
    constructor(props){
      super(props);
      this.state = {
        height: window.innerHeight
      }
    }
    componentWillmount(){
   window.removeEventListener("resize",
      debounce(()=>{this.forceUpdate();},500)
      );
    }
    componentDidMount(){
   window.addEventListener("resize",
      debounce(()=>{this.forceUpdate();},500)
      );
    }
    render() {
      // let settings = {
      //   dots: false,
      //   infinite: false,
      //   speed: 500,
      //   slidesToShow: 1,
      //   slidesToScroll: 1,
      //   autoplay: true
      // };
      // <Slider {...settings} className=" sliderBox"> in case of future need
      
      return (
        <div className="top" style={false?{height: this.state.height}:null}>
          <h1>
            <ScrollContainer comp={<span>Azure <br/>Seasons</span>}/>
          </h1>
          <div className="topImg"/>
      </div>
      );
    }
  }

  module.exports = TopSlider;
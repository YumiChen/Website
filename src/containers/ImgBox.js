import {Component} from "react";
import debounce from "../functions/debounce";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Slider from "react-slick";
import changeToNull from "../actions/changeToNull";

const imgs=[
  "https://s6.postimg.cc/bqh9924xt/p18.jpg",
"https://s6.postimg.cc/6dseuxh1d/p16.jpg",
"https://s6.postimg.cc/hd8k9f14x/愛_.jpg",
"https://s6.postimg.cc/gxxagef7l/satr_vs_the_Xmas.png",
"https://s6.postimg.cc/7skc8smf5/001.jpg",
"https://s6.postimg.cc/rfncc5g1t/GE1.jpg",
"https://s6.postimg.cc/i41af73i9/08.jpg",
"https://s6.postimg.cc/beuqz6i69/013_.jpg" ,
"https://s6.postimg.cc/g69vpkv0h/juan01.jpg"];


class ImgBox extends Component{
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
    render(){
      const img = this.props.img;
      let works = imgs.map((img,index)=>{
      return (<div key={index}><img
        src = {img}
        data-key = {index}
        /></div>);
      }
    );
      let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        initialSlide: img,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      
      return (img?
          <div 
            className="imgBox"
          >
          <div className="bg" onClick={this.props.changeToNull}/>
          <i className = "fa fa-times closeImgBox"
            onClick = {this.props.changeToNull}/>
          <Slider {...settings}>
          {works}
          </Slider>
              </div>
        :null);
    }
  }
  
  const mapStateToProps=(state)=>{
    return {img: state.img};
  }
  
  const mapDispatchToProps_imgbox = (dispatch)=>{
    return bindActionCreators({changeToNull:changeToNull},dispatch);
  }
  
  ImgBox = connect(mapStateToProps,mapDispatchToProps_imgbox)(ImgBox);

  module.exports = ImgBox;
import {Component} from "react";
import debounce from "../functions/debounce";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Slider from "react-slick";
import changeToNull from "../actions/changeToNull";
import imgs from "../data/imgs";

class ImgBox extends Component{
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
    componentDidUpdate(prevProps){
      const that = this;
      if(prevProps.img !== this.props.img){
        if(that.slider){
          setTimeout(()=>{
            that.slider.slickGoTo(+that.props.img);
          }, 200);
        }
      }
    }
    render(){
      const img = this.props.img;
      let works = imgs.map((img,index)=>{
      return (
      <div key={index}>
          <img
            src = {img.url}
            alt = {img.name}
            data-key = {index}
          />
        </div>
      );
      }
    );
      let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      
      return (
          this.props.img?<div 
            className="imgBox"
          >
          <div className="bg" onClick={this.props.changeToNull}/>
          <i className = "fa fa-times closeImgBox"
            onClick = {this.props.changeToNull}/>
          <Slider {...settings} ref={slider => (this.slider = slider)}>
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
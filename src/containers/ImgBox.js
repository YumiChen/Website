import {Component} from "react";
import debounce from "../functions/debounce";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Slider from "react-slick";
import changeToNull from "../actions/changeToNull";
import imgs from "../data/imgs";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: window.innerWidth > 480? true:false
};
class ImgBox extends Component{
    constructor(props){
      super(props);
      this.state = {
        sortedWorks: [...imgs]
      }
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
    componentDidUpdate(prevProps){
      const { img } = this.props;
      if(prevProps.img !== img){
        this.setState({
          sortedWorks: imgs.slice(img).concat(imgs.slice(0, img))
        });
      }
    }
    render(){
      let works = this.state.sortedWorks.map((img,index)=>{
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
      
      return (
          typeof this.props.img === 'number'?<div 
            className="imgBox"
          >
            <div className="bg" onClick={this.props.changeToNull}/>
            <i className = "fa fa-times closeImgBox"
              onClick = {this.props.changeToNull}/>
            <div className="slider-container">
              <Slider {...settings} ref={slider => (this.slider = slider)}>
                {works}
              </Slider>
              <p className="mobile-slide-hint">
                Swipe to view artworks
                <br/>左右滑動觀看
              </p>
            </div>
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
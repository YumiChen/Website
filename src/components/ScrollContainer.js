import React,{Component} from "react";
import Waypoint from 'react-waypoint';

class ScrollContainer extends Component{
    constructor(props){
        super(props);
        this.state = {scrollIn: false};
        this.scrollToggle = this.scrollToggle.bind(this);
    }
    scrollToggle(){
        this.setState({scrollIn: !this.state.scrollIn});
    }
    render(){
        const cls = this.props.cls || "", style = {width: "100vw", height: "100vh"};
        return (
            <Waypoint onEnter={this.scrollToggle} onLeave={this.scrollToggle}>
            <div className={this.state.scrollIn?"scrollContainer scrollIn":"scrollContainer"} style={this.props.fullscreen?style:null}>
                <div className={this.state.scrollIn?"container " + cls:"container"}>
                   {this.props.comp}
                </div>
            </div>
            </Waypoint>
        );
    }
}

module.exports = ScrollContainer;
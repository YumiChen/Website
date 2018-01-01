import {Component} from "react";
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "../reducers/rootReducer";

import ImgBox from "../containers/ImgBox";
import NavBtn from "./NavBtn";
import Nav from "./Nav";
import TopSlider from "./TopSlider";
import About from "./About";
import Works from "../containers/Works";
import Contact from "./Contact";

const store = createStore(rootReducer);

class Page extends Component{
constructor(props){
super(props);
}
render(){
return (
<Provider store={store}>
  <div>
    <ImgBox/>
    <NavBtn/>
    <Nav/>
    <div className="page">
      <TopSlider/>
      <About/>
      <Works/>
      <Contact/>
      <footer>Copyright © 2017 Azure Seasons</footer>
    </div>
  </div>
</Provider>
);
}
}

module.exports = Page;
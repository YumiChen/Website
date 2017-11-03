import {Component} from "react";
import LoadingAnimation from "./LoadingAnimation";

class Contact extends Component{
  constructor(props){
    super(props);
    this.state = {loading: false};
  }
  onSubmit(event){
    event.preventDefault();
    const title = document.getElementById("title").value,
          name = document.getElementById("name").value,
          email = document.getElementById("email").value,
          msg = document.getElementById("msg").value,
      api = "https://portfolio-email-server.herokuapp.com/email?title="+encodeURIComponent(title)+"&name="+name+encodeURIComponent(name)+"&email="+encodeURIComponent(email)+"&msg="+encodeURIComponent(msg);
    
    if(title === "" || name === "" || email === "" || msg === ""){
      sweetAlert(
        'Oops...',
        'There are still empty fields!',
        'error'
      );
      return;
    }
    
    this.setState({loading: true});
    fetch(api,{
      method: "POST",
      mode: "no-cors"
    }).then((data)=>{
      this.setState({loading: false});
      sweetAlert(
        'Success!',
        'Email is sent',
        'success'
      )
    }).catch((err)=>{
      this.setState({loading: false});
      sweetAlert(
        'Oops...',
        'Something went wrong!',
        'error'
      )
    });
  }
  render(){
    this.onSubmit = this.onSubmit.bind(this);
    return(
      <div className="contact">
        {this.state.loading?<LoadingAnimation/>:null}
        <p>Contact</p>
       <form onSubmit={this.onSubmit}>
         <div className="contactItem">
         <label>Title</label>
         <input type = "text" id="title"/>
        </div>
         <div className="contactItem">
         <label>Name</label>
         <input type = "text" id="name"/>
        </div> 
         <div className="contactItem">
        <label>Email</label>
         <input type = "email" id="email"/>
        </div> 
        <div className="contactItem">
         <label>Message</label>
         <textArea id = "msg"/>
          </div>
         <input type="submit" id="submit" value="SEND"/>
       </form>
      </div>
    );
  }
}
  module.exports = Contact;
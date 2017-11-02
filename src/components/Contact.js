import {Component} from "react";

const Contact = (props)=>{
    return(
      <div className="contact">
        <p>Contact</p>
       <form onSubmit={(event)=>{
          event.preventDefault();
          const title = document.getElementById("title").value,
                name = document.getElementById("name").value,
                email = document.getElementById("email").value,
                msg = document.getElementById("msg").value,
            api = "https://portfolio-email-server.herokuapp.com/email?title="+encodeURIComponent(title)+"&name="+name+encodeURIComponent(name)+"&email="+encodeURIComponent(email)+"&msg="+encodeURIComponent(msg);
          fetch(api,{
            method: "POST"
          }).then((data)=>{
            sweetAlert(
              'Success!',
              'The email is sent',
              'success'
            )
          }).catch((err)=>{
            sweetAlert(
              'Oops...',
              'Something went wrong!',
              'error'
            )
          });
        }}>
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
         <input type = "text" id="email"/>
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

  module.exports = Contact;
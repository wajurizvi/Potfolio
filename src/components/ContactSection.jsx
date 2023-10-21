import { useState } from "react";
import * as emailjs from "@emailjs/browser";





const ContactSection = () => {


const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [message,setMessage]=useState("")

function Sendmail() {
  
  const data={
    to_name:name,
    to_email:email,
    message:message,
  
  } 
 
    const Service_id = "service_ir1tvmp";
    const Template_d = "template_o0utrcm";
    const User_id   = "WPYE5KqvgkGuzMNa_";
    emailjs.send(Service_id,Template_d,data,User_id).
c    then(
      function(response){
        alert("send sucsess fully")
      },
      function(error){
        console.log("errorc")
      }
    )
    }
     
    return (
     
    <div id="contact" className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-lg-offset-1 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                        <address>
                            <p className="contact-title">CONTACT ME</p>
                            <p><i className="fa fa-phone"></i> 03554396320</p>
                            <p><i className="fa fa-envelope-o"></i> wajurizvi@gmail.com</p>
                            <p><i className="fa fa-map-marker"></i> Rinor Tech,juma masjit road</p>
                        </address>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-10 wow fadeInUp" data-wow-delay="0.6s">
  
                        <form role="form" onSubmit={(e)=>
                        {Sendmail()}} method="#" action="#">
                            <input onChange={(e)=>
                              {setName(e.target.value)}} name="name" type="text" className="form-control" id="name" placeholder="Your Name" />
                            <input onChange={(e)=>
                              {setEmail(e.target.value)}} name="email" type="email" className="form-control" id="email" placeholder="Your Email" />
                            <textarea onChange={(e)=>
                              {setMessage(e.target.value)}} name="message" rows="5" className="form-control" id="message" placeholder="Your Message"></textarea>
                            <button name="send" type="submit" className="form-control" id="send"  >submit</button>
                        </form>
                    </div>
                    <div className="col-md-1 col-sm-1"></div>
                </div>
            </div>
        </div>
        
    );
  

}

export default ContactSection;

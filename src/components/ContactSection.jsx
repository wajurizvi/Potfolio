import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";





const ContactSection = () => {


const [name,setName]=useState("")
const [email,setemail]=useState("")
const [message,setMessage]=useState("")
const [loading,setLoading]=useState("")









  useEffect(() => emailjs.init("WPYE5KqvgkGuzMNa_"), []);


 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_ir1tvmp";
    const templateId = "template_o0utrcm";

const emailParm={
  from_name:name,
  to_email:email,
  message:message,

}

    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, emailParm {
  
      });
      alert("email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }; 
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
  
                        <form role="form" onSubmit={handleSubmit} method="#" action="#">
                            <input  name="name" type="text" className="form-control" id="name" placeholder="Your Name" />
                            <input name="email" type="email" className="form-control" id="email" placeholder="Your Email" />
                            <textarea name="message" rows="5" className="form-control" id="message" placeholder="Your Message"></textarea>
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

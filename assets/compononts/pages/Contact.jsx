import React from "react "
import {CiLocationOn} from "react-icons/ci"
import{MdMarkEmailUnread} from "react-icons/md"
import {FiPhoneCall } from "react-icons/fi"
import { FaFacebook , FaWhatsapp , FaViber} from "react-icons/fa"
import "./Contact.css"
const Contact=()=>{
    
    
    return(
        <section>
      <div className="contactp">
        <div className="box">
        <div className="contact form">
        <h2>Send Message</h2>
                <div className="formbox">
                <div className="w50">
                    <div className="iunpText ">
                        <input type="text" name="" placeholder="Prénom" />
                    </div>
                    <div className="iunpText ">
                        <input type="text" name="" placeholder="nom" />
                    </div>
                    </div>
                    <div className="w50">

                    <div className="iunpText">
                        <input type="text" name="" placeholder="Adress Email"/>
                    </div>

                    <div className="iunpText w50">
                        <input type="text" name="" placeholder="numéro de téléphone" />
                    </div>
                    </div>
                    <div className="iunpText w100">
                      <textarea name="" placeholder="message"></textarea>
                    </div>
                    <button className="btn-2">Send</button>

                    </div>  
        </div>
 <div className="contact info">
 <h2>Contact Info</h2>
                    <ul className="infoo">
                        <li><a href="https://goo.gl/maps/EriG1KwCDLvtg1Cn8">
                            <CiLocationOn size={35}/></a>
                            <span>117 lacadat les sources,<br/> Bir Mourad Raïs</span>
                            </li>
                        <li>
                            <MdMarkEmailUnread size={35}/>
                            <span>etb.sakhri@gmail.com</span>
                        </li>
                        <li>
                            <FiPhoneCall size={35}/>
                            <span>0771124625 <br/>0556902574</span>
                        </li>
                    </ul>
                    <ul className="icons">
                      <li>  <a href="https://www.facebook.com/ETB-Sakhri-Azeddine-716319312160986">
                            <FaFacebook size={40}/></a></li>
                       <li> <a href="">
                        <FaWhatsapp size={43}/> 
                        </a></li>
                        <li><a href="">
                            <FaViber size={40}/>
                        </a></li>
                    </ul>
            
 </div>
<div className="contact map">

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.401269
5901247!2d3.056320214777688!3d36.736938278958874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1
!3m3!1m2!1s0x128faddc64b2dbad%3A0xd18d7714a67c32c8!2sETB%20Sakhri%20Azeddine!5e0!3m2!1sf
r!2sdz!4v1679485256197!5m2!1sfr!2sdz" width="100%" height="200" style={{borderRadius:"20px" , border:"0px"}}
 allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

</iframe>
</div>

 </div>
      </div>
        </section>
    )
}
export default Contact;
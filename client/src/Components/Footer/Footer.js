import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate,Link} from "react-router-dom";
import { faYoutube,faFacebook,faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons";
import {MdEmail,MdOutlineLocationOn,MdPhoneInTalk}  from "react-icons/md";
import FooterLogo from '../../Assests/FooterLogo.png'
import './Footer.css'
const Footer =()=>
{
    
   const navigate = useNavigate();
   
   const Move =()=>
   {
     navigate('/About') 
     
   }
   const Become =()=>
      {
        navigate('/BecomeTutor')
      }
      const contact =()=>
      {
        navigate('/Contact')
      }
  

    return(
        <>
        <div className='container-fluid back-footer'>
        <div className='container '>
            <div className='row'>
                <div className='col-md-2 mt-4'><img src={FooterLogo} alt="" className=' mt-4' /> </div>
                <div className='col-md-3'>
                <h5>Quick LInks</h5> 
                <h6 className='mt-4' onClick={Move}>About us </h6> 
                <h6 onClick={Become}>Become a Tutor </h6>
                <h6 onClick={contact}>Contact us </h6>
                <h6><Link to ='/ourcourse' style={{color:'black',}}>Our Courses</Link></h6>
                </div>
                <div className='col-md-4'>
                 <h5>Our Contact</h5>
                 <h6 className='mt-4'><MdEmail/> innovativelearning461@gmail.com</h6>
                 <h6><MdOutlineLocationOn/> University Of Agriculter Jhail Road Fsd</h6>
                 <h6><MdPhoneInTalk/> 014-11230-23</h6>
                 </div>
                 <div className='col-md-3'>
                 <h5>Follow Us On</h5>
                 <div className='social-container' >
                <a href="https://www.youtube.com" className="youtube social "><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
                <a href="https://www.facebook.com" className="facebook social ms-2"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                <a href="https://www.twitter.com" className="twitter social ms-2"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                <a href="https://www.instagram.com" className="instagram social ms-2"> <FontAwesomeIcon icon={faInstagram} size="2x" /> </a>
                </div>
                </div>
            </div>
        </div>
        </div>
        {/* <div className='Container-fluid' style={{backgroundColor:'#0d355f'}}>
        gfiewtf
        </div> */}
        </>
    );
}
export default Footer
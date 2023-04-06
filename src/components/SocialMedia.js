import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF,FaLinkedinIn} from 'react-icons/fa';



const SocialMedia = () => (
  <div className="app__social">
   <a href="https://www.linkedin.com/in/karthikeyan-selvaraj-248110185/" target='_blank'>
    <div > 
     <FaLinkedinIn />   
    </div>
    </a>
    <a href="https://www.instagram.com/_karthikeyanselvaraj_/" target='_blank'>
    <div>
      <BsInstagram />
    </div>
    </a>
  </div>
);

export default SocialMedia;

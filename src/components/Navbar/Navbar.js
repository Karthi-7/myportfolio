import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {/* <img src={images.logo} alt="logo" /> */}
        <h4 style={{color:"#46364a"}}>K k</h4>
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
          
        ))}
        <li className="app__flex p-text" >
            <div />
            <a href="cv001.pdf"
            download="cv001.pdf">resume</a>
          </li>
        
      </ul>
    

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              <li><a href="#home">home</a></li>
              <li><a href="#about">about</a></li>
              <li><a href="#work">work</a></li>
              <li><a href="#skills">skills</a></li>
              <li> <a href="cv.pdf" download="cv.pdf">resume</a></li>
              <li><a href="#contact">contact</a></li>
            </ul>
            
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react'
import "./Hero.css"
import {HiLocationMarker} from 'react-icons/hi';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className='hero-wrapper'>
        <div className="paddings innerWidth flexCenter hero-container">
            {/* Hero Left */}
            <div className="flexColStart hero-left">
              <div className="hero-title">
                <div className='orange-circle'/>                
                <motion.h1
                initial={{y:"2rem",opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{duration:2,type:"spring"}}>
                  Empowering <br/>
                  Futures Through<br/>
                  Quality Education
                </motion.h1>
              </div>
              <div className="flexColStart hero-des"><span className='secondaryText'>
              Unlock your academic potential with specialized guidance</span>
                <span  className='secondaryText'>In PCM, Commerce, and comprehensive classes for grades 5-10.</span>
                </div>
                <div className='flexCenter search-bar'>
                  <HiLocationMarker color="var(--blue)" size={25}/>
                  <input type="text"/>
                  <button className='button'>Search</button>
                </div>
                <div className="flexCenter stats">
                  <div className="flexColCenter stat">
                    <span>
<CountUp start={2800} end={3000} duration={4}/><span>+</span>
                    </span>
                    <span className='secondaryText'>Students Teached</span>
                  </div>
                  <div className="flexColCenter stat">
                    <span>
<CountUp start={0} end={4} duration={2}/><span>+</span>
                    </span>
                    <span className='secondaryText'>Centers</span>
                  </div>
                  <div className="flexColCenter stat">
                    <span>
<CountUp end={28} duration={4}/><span>+</span>
                    </span>
                    <span className='secondaryText'>Teachers</span>
                  </div>
                </div>
            </div>

            {/* Hero Right */}
            <div className="flexCenter hero-right">
              <motion.div initial={{x:"7rem",opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:2,
              type:"ease-in"}} className="image-container">
                <img src="./hero-image.png" alt="" />
              </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Hero
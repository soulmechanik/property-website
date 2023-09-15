import React from 'react';
import './Hero.css';
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerwidth  flexcenter hero-container">
        <div className="flexcolstart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: '2rem', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: 'spring',
              }}
            >
              Discover <br />Most Suitable <br /> Property
            </motion.h1>
          </div>
          <div className="flexcolstart hero-des">
            <span className="secondarytext">
              Find a variety of properties that suit you very easily
            </span>
            <span className="secondarytext">
              Forget all the difficulties in finding a residence for you
            </span>
          </div>
          <div className="search-bar flexcenter">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexcenter stats">
            <div className="flexcolcenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
              </span>
              <span className="secondarytext"> Premium Products </span>
            </div>
            <div className="flexcolcenter stat">
              <span>
                <CountUp end={2000} duration={3} /> <span>+</span>
              </span>
              <span className="secondarytext"> Happy Customers </span>
            </div>
            <div className="flexcolcenter stat">
              <span>
                <CountUp end={30} duration={4} /> <span>+</span>
              </span>
              <span className="secondarytext"> Award Winning </span>
            </div>
          </div>
        </div>
        <div className="hero-right flexcenter">
          <motion.div
            initial={{ x: '7rem', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: 'spring',
            }}
          >
            <div className="image-container">
              <img src="./hero-image.png" alt="hero image" srcSet="" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import "./About.css";
import shikharam_logosd from "../../assets/shikharam_logosd.png";

const About = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter">
        <div className="flexColStart c-head">
          <span className="orangeText flexColStart">About Us</span>
          <span className="primaryText">Shikhram Institute</span>
        </div>
        <div className="flexCenter c-container">
          <div className="flexColStart a-left">
            <span className="secondaryText">
              Shikhram Institute, an educational institution in Indore, Madhya
              Pradesh, the institute provides specialized instruction in PCM and
              Commerce streams for 11th and 12th grades, and all variety of
              classes for students in grades 5th to 10th. The institute follows
              the CBSE and MP Board curriculum. Shikhram Institute is committed
              to imparting quality education that empowers students to excel in
              their academic pursuits.
            </span>
          </div>
          <div className="flexEnd a-right">
            <div className="image-container-aboutus">
              <img src={shikharam_logosd} alt="Shikhram Image"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import styles from "./CareersAbout.module.css";

let imgsrc = require("./assets/about.jpg");

const About = () => {
  return (
    <div className={styles.careersDiv}>
      <img src={imgsrc} alt="Careers Page" />
    </div>
  );
}

export default About;
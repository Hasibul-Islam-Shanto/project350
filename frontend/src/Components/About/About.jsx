import React from "react";
import styles from "./about.module.scss";

const About = () => {
  return (
    <React.Fragment>
      <div className={styles.about}>
        <div className={styles.imgDiv}>
          <img src="/head.jpg" alt="contact" />
        </div>
        <div className={styles.make_opacity}>
          <h1 style={{ color: "#fff", fontSize: "45px", fontWeight: "bold" }}>
            Profile
          </h1>
        </div>
        <div className={styles.about_container}>
          
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;

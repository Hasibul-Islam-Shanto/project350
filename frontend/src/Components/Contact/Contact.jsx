import React from "react";
import contactImg from "./contact.jpg";
import styles from "./contact.module.scss";

const Contact = () => {
  return (
    <React.Fragment>
      <div className={styles.contact}>
        <div className={styles.imgDiv}>
          <img src={contactImg} alt="contact" />
        </div>

        <div className={styles.make_opacity}>
          <h1 style={{ color: "#fff", fontSize: "45px", fontWeight: "bold" }}>
            Contact us
          </h1>
        </div>

        <div className={styles.write_message}>
          <h1 style={{ color: "#21283f", fontSize: "30px" }}>
            Write a Message
          </h1>

          <div className={styles.wm_subdiv}>
            <input
              type="text"
              placeholder="Your Name"
              className={styles.subdiv_input}
            />
            <input
              type="text"
              placeholder="Your Email"
              className={styles.subdiv_input}
            />
          </div>
          <div className={styles.wm_subdiv}>
            <input
              type="text"
              placeholder="Subject"
              className={styles.subdiv_input}
            />
            <input
              type="text"
              placeholder="Mobile"
              className={styles.subdiv_input}
            />
          </div>

          <textarea
            placeholder="Write message"
            style={{
              outline: "none",
              height: "120px",
              width: "90%",
              padding: "18px 20px",
              margin: "8px",
              border: "1px solid #e1e1e1",
              color: "#6a2e4d",
              fontSize: ".9rem",
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;

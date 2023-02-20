import React from "react";
import styles from "./profile.module.scss";
const Profile = () => {
  return (
    <React.Fragment>
      <div className={styles.profile}>
        <div className={styles.imgDiv}>
          <img src="/head.jpg" alt="contact" />
        </div>
        <div className={styles.make_opacity}>
          <h1 style={{ color: "#fff", fontSize: "45px", fontWeight: "bold" }}>
            Profile
          </h1>
        </div>

        <div className={styles.profileDetails}>
          <div className={styles.profile_subdiv}>
            <div className={styles.profile_left}>
              <img src="" alt="" />
              <input type="file" />
            </div>
            <div className={styles.profile_right}>
              <label className={styles.input_field}>
                <span>Name</span>
                <input type="text" />
              </label>
              <label className={styles.input_field}>
                <span>Email</span>
                <input type="text" />
              </label>
              <label className={styles.input_field}>
                <span>Address</span>
                <input type="text" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;

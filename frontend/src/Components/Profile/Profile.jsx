import React, { useState } from "react";
import EditModal from "./EditModal";
import styles from "./profile.module.scss";
const Profile = () => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
  });
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
              <img
                src="/profile.jpg"
                alt="profile"
                className={styles.profile_img}
              />
            </div>
            <div className={styles.profile_right}>
              <div className={styles.profile_data}>
                <h3>Account :</h3>
                <p>123456789</p>
              </div>
              <div className={styles.profile_data}>
                <h3>Name :</h3>
                <p>Md Hasibul Islam </p>
              </div>
              <div className={styles.profile_data}>
                <h3>Email :</h3>
                <p>mdhasibulislam895@gmail.com</p>
              </div>
              <div className={styles.profile_data}>
                <h3>Phone :</h3>
                <p>01785303538</p>
              </div>
              <button
                onClick={() => setOpenEditModal(!openEditModal)}
                className={styles.edit_btn}
              >
                Edit profile
              </button>
            </div>
          </div>
        </div>
      </div>
      {openEditModal && (
        <EditModal
          profileData={profileData}
          setProfileData={setProfileData}
          setOpenEditModal={setOpenEditModal}
        />
      )}
    </React.Fragment>
  );
};

export default Profile;
import React, { useEffect, useState } from "react";
import EditModal from "./EditModal";
import styles from "./profile.module.scss";
import { useContext } from "react";
import { TicketingContext } from "../../Context/TicketingContext";

const Profile = () => {
  const { account, GetUserProfile, userProfile } = useContext(TicketingContext);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    pic: "",
  });

  useEffect(() => {
    GetUserProfile();
  }, [account]);
  console.log(userProfile);
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
                src={`https://gateway.pinata.cloud/ipfs/${userProfile.pic}`}
                alt="profile"
                className={styles.profile_img}
              />
            </div>
            <div className={styles.profile_right}>
              <div className={styles.profile_data}>
                <h3>Account :</h3>
                <p>{account}</p>
              </div>
              <div className={styles.profile_data}>
                <h3>Name : </h3>
                <p>{userProfile.name} </p>
              </div>
              <div className={styles.profile_data}>
                <h3>Email :</h3>
                <p>{userProfile.email}</p>
              </div>
              <div className={styles.profile_data}>
                <h3>Phone :</h3>
                <p>{userProfile.phone}</p>
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

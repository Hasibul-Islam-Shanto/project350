import React from "react";
import styles from "./edit.module.scss";
import { MdClear } from "react-icons/md";

const EditModal = ({ setOpenEditModal, profileData, setProfileData }) => {
  const onvalueChange = (event) => {
    const { name, value } = event.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const editProfile = () => {
    console.log(profileData);
  };
  return (
    <React.Fragment>
      <div className={styles.edit_modal}>
        <div className={styles.edit_div}>
          <div className={styles.close_modal}>
            <MdClear onClick={() => setOpenEditModal(false)} />
          </div>
          <div className={styles.edit_heading}>
            <span>Edit your profile</span>
          </div>

          <div className={styles.edit_elemetns}>
            <label className={styles.edit_ele}>
              <span className={styles.input_name}>Your Name</span>
              <input
                type="text"
                name="name"
                value={profileData.name}
                onChange={onvalueChange}
                className={styles.edit_input}
              />
            </label>
            <label className={styles.edit_ele}>
              <span className={styles.input_name}>Your Email</span>
              <input
                type="text"
                name="email"
                value={profileData.email}
                onChange={onvalueChange}
                className={styles.edit_input}
              />
            </label>
            <label className={styles.edit_ele}>
              <span className={styles.input_name}>Your Phone</span>
              <input
                type="text"
                name="phone"
                value={profileData.phone}
                onChange={onvalueChange}
                className={styles.edit_input}
              />
            </label>
            <label className={styles.edit_ele}>
              <span className={styles.input_name}>Your image</span>
              <input type="file" className={styles.edit_input} />
            </label>

            <button onClick={editProfile} className={styles.save_btn}>
              Save
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditModal;

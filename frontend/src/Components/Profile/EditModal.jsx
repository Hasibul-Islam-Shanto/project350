import React, { useContext, useState } from "react";
import axios from "axios";
import styles from "./edit.module.scss";
import { MdClear } from "react-icons/md";
import { TicketingContext } from "../../Context/TicketingContext";

const EditModal = ({ setOpenEditModal, profileData, setProfileData }) => {
  const { CreateNewProfile } = useContext(TicketingContext);
  const [loading, setLoading] = useState(true);
  const onvalueChange = (event) => {
    const { name, value } = event.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const editProfile = async () => {
    await CreateNewProfile(profileData);
    setProfileData({
      name: "",
      email: "",
      phone: "",
      pic: "",
    });
    setOpenEditModal(false);
  };

  const retrieveFile = async (e) => {
    setLoading(false)
    try {
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      const resFile = await axios({
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
        data: formData,
        headers: {
          pinata_api_key: `047b1b0fa3caa15a9898`,
          pinata_secret_api_key: `03af226496b625605a97b75b94f55a40f6fae5d9f42ae5a1af27ecf19cdb8d2a`,
          "Content-Type": "multipart/form-data",
        },
      });
      const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
      setProfileData((prevState)=>{
        return {
          ...prevState,
          pic: ImgHash.toString().substring(6),
        };
      })
      setLoading(true)
    } catch (e) {
      alert("Unable to upload image to Pinata");
    }
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
              {loading ? (
                <input
                  type="file"
                  className={styles.edit_input}
                  onChange={retrieveFile}
                />
              ) : (
                <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                  <img src="/loading.gif" alt="" height={90} width={90} />
                </div>
              )}
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

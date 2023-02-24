import React from "react";
import styles from "./footer.module.scss";
import { BsFacebook, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const explore = [
  {
    id: 1,
    name: "About us",
  },
  {
    id: 2,
    name: "Careers",
  },
  {
    id: 3,
    name: "Travel alert",
  },
  {
    id: 4,
    name: "Sponsorship",
  },
  {
    id: 5,
    name: "Beyond",
  },
];

const privacy = [
  {
    id: 1,
    name: "Bus ticket prices",
  },
  {
    id: 2,
    name: "Train ticket prices",
  },
  {
    id: 3,
    name: "Guides",
  },
  {
    id: 4,
    name: "News",
  },
  {
    id: 5,
    name: "Others",
  },
];

const Footer = () => {
  return (
    <React.Fragment>
      {/* footer main... */}
      <div className={styles.footer_main}>
        {/* footer subdiv */}

        <div className={styles.footer_subdiv}>
          {/* left div */}
          <div className={styles.sub_leftdiv}>
            <span className={styles.logo}>Three50</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              placeat ipsam quia assumenda error dicta.
            </p>
          </div>

          {/* middle div */}
          <div className={styles.sub_middlediv}>
            <div>
              <ul>
                <span className={styles.top}>Explore</span>
                {explore.map((exp) => (
                  <li key={exp.id}>{exp.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <ul>
                <span className={styles.top}>Privacy</span>
                {privacy.map((pri) => (
                  <li key={pri.id}>{pri.name}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* right div */}
          <div className={styles.sub_rightdiv}>
            <span className={styles.top}>Contacts</span>
            <ul>
              <li style={{ color: "#fff" }}>Plysical address of the office</li>
              <li>+8801789123456</li>
              <li>three50@gmail.com</li>
            </ul>
            <div className={styles.socialLink}>
              <BsFacebook className={styles.icons} />
              <BsTwitter className={styles.icons} />
              <BsGithub className={styles.icons} />
              <BsLinkedin className={styles.icons} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;

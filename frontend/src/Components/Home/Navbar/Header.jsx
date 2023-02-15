import React, { useState } from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";

const navItems = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/",
  },
  {
    id: 3,
    title: "Booking",
    link: "/",
  },
  {
    id: 4,
    title: "Transaction",
    link: "/",
  },
  {
    id: 5,
    title: "Contact",
    link: "/contact",
  },
  {
    id: 6,
    title: "Tracking",
    link: "/",
  },
];
const Header = () => {
  const [navItem, setNavItem] = useState(1);
  const [scroll, setScroll] = useState(false);
  const changeHeight = () => {
    if (window.scrollY >= 200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", changeHeight);
  return (
    <React.Fragment>
      <div
        className={styles.heading}
        style={
          scroll
            ? {
                backgroundColor: "#212529",
                position: "fixed",
                transition: ".5s ease-in-out",
              }
            : { backgroud: "transparent" }
        }
      >
        <div className={styles.container}>
          <span className={styles.logo}>Three50</span>
          <ul>
            {navItems.map((nav) => (
              <li key={nav.id} onClick={() => setNavItem(nav.id)}>
                <Link
                  className={
                    navItem === nav.id ? styles.active_link : styles.link
                  }
                  to={nav.link}
                >
                  {nav.title}
                </Link>
              </li>
            ))}

            <Link to="/" className={styles.registerbtn}>
              Register
            </Link>
            <Link to="/" className={styles.signinbtn}>
              Signin
            </Link>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;

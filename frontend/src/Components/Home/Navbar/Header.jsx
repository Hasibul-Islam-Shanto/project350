import React, { useState } from "react";
import styles from "./header.module.scss";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { TicketingContext } from "../../../Context/TicketingContext";

const navItems = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    title: "Booking",
    link: "/booking",
  },
  {
    id: 4,
    title: "Transaction",
    link: "/transaction",
  },
  {
    id: 5,
    title: "Tracking",
    link: "/tracking",
  },
  {
    id: 6,
    title: "Profile",
    link: "/profile",
  },
];
const Header = () => {
  const { account, connectMetaMask } = useContext(TicketingContext);
  const [scroll, setScroll] = useState(false);

  const changeHeight = () => {
    if (window.scrollY >= 150) {
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
                transition: "1s ease-in-out",
              }
            : { backgroud: "transparent" }
        }
      >
        <div className={styles.container}>
          <span className={styles.logo}>Three50</span>
          <ul>
            {navItems.map((nav) => (
              <li key={nav.id}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.active_link : styles.link
                  }
                  to={nav.link}
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}
            {!account && (
              <button onClick={connectMetaMask} className={styles.connectbtn}>
                Connect
              </button>
            )}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;

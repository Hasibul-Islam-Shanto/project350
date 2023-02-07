import React from "react";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <React.Fragment>
      <h1 className={styles.heading}>Hello world.</h1>
    </React.Fragment>
  );
};

export default Header;

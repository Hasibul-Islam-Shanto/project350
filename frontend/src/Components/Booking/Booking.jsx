import React, { useState } from "react";
import styles from "./booking.module.scss";
import { BsPlusCircle } from "react-icons/bs";
import { BiMinusCircle } from "react-icons/bi";
import TicketAdd from "./TicketAdd/TicketAdd";
import TicketBuy from "./TicketBuy/TicketBuy";
const Booking = () => {
  const [activeBtn, setActiveBtn] = useState("addticket");
  return (
    <React.Fragment>
      <div className={styles.booking_main}>
        <div className={styles.imgDiv}>
          <img src="/head.jpg" alt="contact" />
        </div>
        <div className={styles.make_opacity}>
          <h1 style={{ color: "#fff", fontSize: "45px", fontWeight: "bold" }}>
            Booking
          </h1>
        </div>
        <div className={styles.container}>
          <div className={styles.sub_container}>
            <div className={styles.btn_container}>
              <div
                onClick={() => setActiveBtn("addticket")}
                className={`${styles.btn_div} ${
                  activeBtn === "addticket" ? styles.active_btn_div : ""
                }`}
              >
                <BsPlusCircle />
                <span> Add Tickets</span>
              </div>
              <div
                onClick={() => setActiveBtn("buyticket")}
                className={`${styles.btn_div} ${
                  activeBtn === "buyticket" ? styles.active_btn_div : ""
                }`}
              >
                <BiMinusCircle />
                <span>Buy Tickets</span>
              </div>
            </div>
            {activeBtn === "addticket" && <TicketAdd />}
            {activeBtn === "buyticket" && <TicketBuy />}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Booking;

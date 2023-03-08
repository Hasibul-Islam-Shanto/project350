import React, { useState } from "react";
import styles from "./card.module.scss";
import { bus, train } from "./cardItems";
import { BiBus, BiTrain } from "react-icons/bi";
import { CgArrowsExchangeAlt } from "react-icons/cg";

const Cards = () => {
  const [activeBtn, setActiveBtn] = useState("bus");
  return (
    <React.Fragment>
      <div className={styles.main_cards}>
        <div className={styles.card_container}>
          <h1>See Your Destinations</h1>
          <div className={styles.btn_container}>
            <button
              onClick={() => setActiveBtn("bus")}
              className={
                activeBtn === "bus" ? `${styles.active_btn}` : `${styles.btn}`
              }
            >
              <span>Buses</span>
              <BiBus className={styles.icon} />
            </button>
            <button
              onClick={() => setActiveBtn("train")}
              className={
                activeBtn === "train" ? `${styles.active_btn}` : `${styles.btn}`
              }
            >
              <span>Train</span>
              <BiTrain className={styles.icon} />
            </button>
          </div>
          {activeBtn === "bus" && (
            <div className={styles.cards}>
              {bus.map((bs) => (
                <div key={bs.id} className={styles.card}>
                  <img src={bs.imageUrl} alt="busImage" />
                  <p className={styles.bs_date}>
                    {bs.startDate} - {bs.endDate}
                  </p>
                  <div className={styles.location}>
                    <p>{bs.startLocation}</p>
                    <CgArrowsExchangeAlt className={styles.icon} />
                    <p>{bs.destination}</p>
                  </div>
                  <div className={styles.price}>
                    <span>{bs.expense} ETH</span>
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeBtn === "train" && (
            <div className={styles.cards}>
              {train.map((tr) => (
                <div key={tr.id} className={styles.card}>
                  <img src={tr.imageUrl} alt="busImage" />
                  <p className={styles.bs_date}>
                    {tr.startDate} - {tr.endDate}
                  </p>
                  <div className={styles.location}>
                    <p>{tr.startLocation}</p>
                    <CgArrowsExchangeAlt className={styles.icon} />
                    <p>{tr.destination}</p>
                  </div>
                  <div className={styles.price}>
                    <span>{tr.expense} ETH</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cards;

import React, { useEffect } from "react";
import styles from "./transactions.module.scss";
import { useContext } from "react";
import { TicketingContext } from "../../Context/TicketingContext";
const Transactions = () => {
  const { allTransactions, getAllTransactions } = useContext(TicketingContext);

  useEffect(() => {
    getAllTransactions();
  }, []);
  return (
    <React.Fragment>
      <div className={styles.transat_main}>
        <div className={styles.imgDiv}>
          <img src="/head.jpg" alt="contact" />
        </div>
        <div className={styles.make_opacity}>
          <h1 style={{ color: "#fff", fontSize: "45px", fontWeight: "bold" }}>
            Transactions
          </h1>
        </div>

        <div className={styles.alltickets_div}>
          <div
            className={`${styles.alltickets_container} ${
              allTransactions.length > 0
                ? ""
                : styles.alltickets_container_active
            }`}
          >
            {allTransactions.map((transact, index) => (
              <div className={styles.allticket_element} key={index}>
                <span
                  style={{
                    fontSize: "1.5rem",
                    color: "#622243",
                    fontWeight: "bold",
                  }}
                >
                  {transact.brandName}
                </span>
                <div className={styles.allticket_subele_user}>
                  {/* <span>From : {transact.starting}</span> */}
                  <span>From : {transact.buyer}</span>
                  <span>To : {transact.seller}</span>
                </div>

                <div className={styles.allticket_subele}>
                  <span>Price : {parseInt(transact.paid._hex)} ETH</span>
                  <span>Quantity : {parseInt(transact.quantity._hex)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Transactions;

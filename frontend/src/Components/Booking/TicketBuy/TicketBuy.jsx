import React, { useState } from "react";
import styles from "./ticketbuy.module.scss";
// id, quantity
const TicketBuy = () => {
  const [buyTickets, setBuyTickets] = useState({
    id: "",
    numberOfTicket: "",
  });

  const onvalueChange = (event) => {
    const { name, value } = event.target;
    setBuyTickets({
      ...buyTickets,
      [name]: value,
    });
  };

  const buyTicket = () => {
    console.log(buyTickets);
  };
  return (
    <React.Fragment>
      <div className={styles.ticketbuy}>
        <label className={styles.edit_ele}>
          <span className={styles.input_name}>Brand Id</span>
          <input
            type="text"
            name="brandName"
            value={buyTickets.id}
            onChange={onvalueChange}
            className={styles.edit_input}
          />
        </label>
        <label className={styles.edit_ele}>
          <span className={styles.input_name}>Number of Tickets</span>
          <input
            type="text"
            name="startingPoint"
            value={buyTickets.numberOfTicket}
            onChange={onvalueChange}
            className={styles.edit_input}
          />
        </label>
        <button onClick={buyTicket} className={styles.btn}>
          Buy
        </button>
      </div>
    </React.Fragment>
  );
};

export default TicketBuy;

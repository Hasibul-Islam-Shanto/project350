import React, { useState } from "react";
import styles from "./ticketbuy.module.scss";
import { MdClear } from "react-icons/md";
import { useContext } from "react";
import { TicketingContext } from "../../../Context/TicketingContext";
const TicketBuy = ({ setBuyTicketModal, brandInfo, id }) => {
  const { buyTickets } = useContext(TicketingContext);
  const [buyTicket, setBuyTicket] = useState({
    id: id,
    organizer: brandInfo.organizer,
    numberOfTicket: "",
    amount: "",
  });
  const onvalueChange = (event) => {
    const { name, value } = event.target;
    setBuyTicket({
      ...buyTicket,
      [name]: value,
    });
  };
  const ticketBuy = () => {
    buyTickets(buyTicket);
    setBuyTicket({ numberOfTicket: "", amount: "" });
    setBuyTicketModal(false);
  };
  return (
    <React.Fragment>
      <div className={styles.ticketbuy_main}>
        <div className={styles.close_modal}>
          <MdClear
            onClick={() => {
              setBuyTicketModal(false);
            }}
          />
        </div>
        <div className={styles.ticketbuy}>
          {/* <label className={styles.edit_ele}>
            <span className={styles.input_name}>Brand Id</span>
            <input
              type="number"
              name="id"
              value={buyTicket.id}
              onChange={onvalueChange}
              className={styles.edit_input}
            />
          </label> */}
          <label className={styles.edit_ele}>
            <span className={styles.input_name}>Organization Address</span>
            <input
              disabled
              type="text"
              name="organizer"
              value={brandInfo.organizer}
              // onChange={onvalueChange}
              className={styles.edit_input}
            />
          </label>
          <label className={styles.edit_ele}>
            <span className={styles.input_name}>Number of Tickets</span>
            <input
              type="number"
              name="numberOfTicket"
              value={buyTicket.numberOfTicket}
              onChange={onvalueChange}
              className={styles.edit_input}
            />
          </label>
          <label className={styles.edit_ele}>
            <span className={styles.input_name}>Price of Tickets</span>
            <input
              type="number"
              name="amount"
              value={buyTicket.amount}
              onChange={onvalueChange}
              className={styles.edit_input}
            />
          </label>
          <button onClick={ticketBuy} className={styles.btn}>
            Buy
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TicketBuy;

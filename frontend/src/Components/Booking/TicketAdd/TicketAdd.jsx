import React, { useState } from "react";
import styles from "./ticketadd.module.scss";
import { useContext } from "react";
import { TicketingContext } from "../../../Context/TicketingContext";
import { MdClear } from "react-icons/md";

// brand name ,starting point, destination, date, price, ticket count, vehicle number

const TicketAdd = ({ setAddTicketModal }) => {
  const { createTickets } = useContext(TicketingContext);
  const [addTickets, setAddTickets] = useState({
    brandName: "",
    startingPoint: "",
    destination: "",
    date: "",
    price: 0,
    ticketCount: 0,
  });

  const onvalueChange = (event) => {
    const { name, value } = event.target;
    setAddTickets({
      ...addTickets,
      [name]: value,
    });
  };

  const addTicket = () => {
    createTickets(addTickets);
    setAddTickets({
      brandName: "",
      startingPoint: "",
      destination: "",
      date: "",
      price: 0,
      ticketCount: 0,
    });
    setAddTicketModal(false);
  };
  return (
    <React.Fragment>
      <div className={styles.ticket_main}>
        <div className={styles.close_modal}>
          <MdClear
            onClick={() => {
              setAddTicketModal(false);
            }}
          />
        </div>
        <div className={styles.ticketadd}>
          <label className={styles.edit_ele}>
            <span className={styles.input_name}>Brand Name</span>
            <input
              type="text"
              name="brandName"
              value={addTickets.brandName}
              onChange={onvalueChange}
              className={styles.edit_input}
            />
          </label>
          <label className={styles.edit_ele}>
            <span className={styles.input_name}>Starting point</span>
            <input
              type="text"
              name="startingPoint"
              value={addTickets.startingPoint}
              onChange={onvalueChange}
              className={styles.edit_input}
            />
          </label>
          <label className={styles.edit_ele}>
            <span className={styles.input_name}>Destination</span>
            <input
              type="text"
              name="destination"
              value={addTickets.destination}
              onChange={onvalueChange}
              className={styles.edit_input}
            />
          </label>
          <label className={styles.edit_ele}>
            <span className={styles.input_name}>Date</span>
            <input
              type="date"
              name="date"
              value={addTickets.date}
              onChange={onvalueChange}
              className={styles.edit_input}
            />
          </label>
          <label className={styles.edit_ele}>
            <span className={styles.input_name}>Price</span>
            <input
              type="text"
              name="price"
              value={addTickets.price}
              onChange={onvalueChange}
              className={styles.edit_input}
            />
          </label>
          <label className={styles.edit_ele}>
            <span className={styles.input_name}>Ticket count</span>
            <input
              type="text"
              name="ticketCount"
              value={addTickets.ticketCount}
              onChange={onvalueChange}
              className={styles.edit_input}
            />
          </label>

          <button onClick={addTicket} className={styles.btn}>
            Add
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TicketAdd;

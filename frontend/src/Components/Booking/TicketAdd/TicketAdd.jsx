import React, { useState } from "react";
import styles from "./ticketadd.module.scss";

// brand name ,starting point, destination, date, price, ticket count, vehicle number

const TicketAdd = () => {
  const [addTickets, setAddTickets] = useState({
    brandName: "",
    startingPoint: "",
    destination: "",
    date: "",
    price: "",
    ticketCount: "",
    vehicleNumber: "",
  });

  const onvalueChange = (event) => {
    const { name, value } = event.target;
    setAddTickets({
      ...addTickets,
      [name]: value,
    });
  };

  const addTicket = () => {
    console.log(addTickets);
  };
  return (
    <React.Fragment>
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
        <label className={styles.edit_ele}>
          <span className={styles.input_name}>Vehicle number</span>
          <input
            type="text"
            name="vehicleNumber"
            value={addTickets.vehicleNumber}
            onChange={onvalueChange}
            className={styles.edit_input}
          />
        </label>

        <button onClick={addTicket} className={styles.btn}>
          Add
        </button>
      </div>
    </React.Fragment>
  );
};

export default TicketAdd;

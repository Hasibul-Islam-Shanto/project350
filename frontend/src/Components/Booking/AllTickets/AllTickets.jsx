import React, { useEffect } from "react";
import styles from "./alltickets.module.scss";
import { useContext } from "react";
import { TicketingContext } from "../../../Context/TicketingContext";
const AllTickets = () => {
  const { allTickets, getAllEvents } = useContext(TicketingContext);
  console.log(allTickets);

  useEffect(()=>{
    getAllEvents();
  },[])
  return (
    <React.Fragment>
      <div>
        {allTickets.map((tickets, index) => (
            <div key={index}>
              <h3>{tickets.brandName}</h3>
            </div>
          ))}
      </div>
    </React.Fragment>
  );
};

export default AllTickets;

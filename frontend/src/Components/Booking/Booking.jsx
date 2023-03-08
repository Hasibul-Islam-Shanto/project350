/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styles from "./booking.module.scss";
import { BsPlusCircle } from "react-icons/bs";
import { useContext } from "react";
import { TicketingContext } from "../../Context/TicketingContext";
import { ImTicket } from "react-icons/im";
import Modal from "../Modal/Modal";
import TicketAdd from "./TicketAdd/TicketAdd";
import TicketBuy from "./TicketBuy/TicketBuy";

const Booking = () => {
  const { allTickets, getAllEvents, transactHash } =
    useContext(TicketingContext);
  const [addTicketModal, setAddTicketModal] = useState(false);
  const [buyTicketModal, setBuyTicketModal] = useState(false);
  const [id, setId] = useState();
  const [ticketPrice, setTicketPrice] = useState(0)
  const [brandInfo, setBrandInfo] = useState({});
  useEffect(() => {
    getAllEvents();
  }, [transactHash]);
  return (
    <React.Fragment>
      {addTicketModal && (
        <Modal>
          <TicketAdd setAddTicketModal={setAddTicketModal} />
        </Modal>
      )}
      {buyTicketModal && (
        <Modal>
          <TicketBuy
            setBuyTicketModal={setBuyTicketModal}
            brandInfo={brandInfo}
            id={id}
            ticketPrice={ticketPrice}
          />
        </Modal>
      )}
      <div className={styles.booking_main}>
        <div className={styles.imgDiv}>
          <img src="/head.jpg" alt="contact" />
        </div>
        <div className={styles.make_opacity}>
          <h1 style={{ color: "#fff", fontSize: "45px", fontWeight: "bold" }}>
            Booking
          </h1>
        </div>

        <div className={styles.alltickets_div}>
          <div className={styles.conainter}>
            <div className={styles.btn_container}>
              <button
                onClick={() => setAddTicketModal(!addTicketModal)}
                className={styles.btn_div}
              >
                <BsPlusCircle />
                <span> Add Tickets</span>
              </button>
            </div>
          </div>

          <div
            className={`${styles.alltickets_container} ${
              allTickets.length > 0 ? "" : styles.alltickets_container_active
            }`}
          >
            {allTickets.map((ticket, index) => (
              <div className={styles.allticket_element} key={index}>
                <span
                  style={{
                    fontSize: "1.5rem",
                    color: "#622243",
                    fontWeight: "bold",
                  }}
                >
                  {ticket.brandName}
                </span>
                <div className={styles.allticket_subele}>
                  <span>From : {ticket.starting}</span>
                  <span>To : {ticket.destination}</span>
                </div>
                <div className={styles.allticket_subele}>
                  <span>
                    Total tickets : {parseInt(ticket.ticketCount._hex)}
                  </span>
                  <span>
                    Remaining tickets : {parseInt(ticket.ticketRemain._hex)}
                  </span>
                </div>
                <div className={styles.allticket_subele}>
                  <span>Price : {parseInt(ticket.price._hex)} ETH</span>
                  <button
                    onClick={() => {
                      setBuyTicketModal(!buyTicketModal);
                      setBrandInfo(ticket);
                      setId(index);
                      setTicketPrice(parseInt(ticket.price._hex));
                    }}
                    className={styles.btn}
                  >
                    <ImTicket />
                    <span>Buy</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Booking;

// <div className={styles.container}>
//   <div className={styles.sub_container}>
//     <div className={styles.btn_container}>
//       <div
//         onClick={() => setActiveBtn("addticket")}
//         className={`${styles.btn_div} ${
//           activeBtn === "addticket" ? styles.active_btn_div : ""
//         }`}
//       >
//         <BsPlusCircle />
//         <span> Add Tickets</span>
//       </div>
//       <div
//         onClick={() => setActiveBtn("allticket")}
//         className={`${styles.btn_div} ${
//           activeBtn === "allticket" ? styles.active_btn_div : ""
//         }`}
//       >
//         <BiMinusCircle />
//         <span>All Tickets</span>
//       </div>
//     </div>
//     {activeBtn === "addticket" && <TicketAdd />}
//     {/* {activeBtn === "buyticket" && <TicketBuy />} */}
//     {activeBtn === "allticket" && <AllTickets />}
//   </div>
// </div>;

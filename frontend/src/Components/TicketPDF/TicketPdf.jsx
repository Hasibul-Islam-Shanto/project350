import React, { useContext } from "react";
import jsPDF from "jspdf";
import styles from "./ticketPdf.module.scss";
import { TicketingContext } from "../../Context/TicketingContext";

function TrainETicketPDF({ transact }) {
  const { account } = useContext(TicketingContext);
  const {
    brandName,
    seller,
    buyer,
    paid,
    quantity,
    jounryDate,
    source,
    destination,
  } = transact;
  function generatePDF() {
    const doc = new jsPDF();
    // Set font size and color
    doc.setFontSize(20);
    doc.setTextColor("#2196f3");
    // Add train name
    doc.text(brandName, 105, 25, null, null, "center");

    doc.setFontSize(12);
    doc.setTextColor("#000000");
    doc.text(`From : ${buyer}`, 10, 60);
    doc.text(`To : ${seller}`, 10, 70);

    doc.setFontSize(12);
    doc.setTextColor("#000000");
    doc.text(
      `Departure: ${new Date(parseInt(jounryDate)).toLocaleDateString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })}`,
      10,
      50
    );
    // Set font size and color
    doc.setFontSize(12);
    doc.setTextColor("#000000");
    // Add source and destination cities
    doc.text(`Source : ${source}`, 10, 80);
    doc.text(`Destination : ${destination}`, 140, 80);
    doc.setFontSize(12);
    doc.setTextColor("#000000");
    doc.text(`Paid : ${parseInt(paid._hex)} ETH`, 10, 90);
    doc.text(`Quantity : ${parseInt(quantity._hex)}`, 140, 90);
    doc.save("Userticket.pdf");
  }

  return (
    <div className={styles.pdf_container}>
      <button className={styles.btn} onClick={generatePDF}>
        Download
      </button>
    </div>
  );
}

export default TrainETicketPDF;

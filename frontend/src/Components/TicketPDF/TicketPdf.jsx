import React from 'react';
import jsPDF from 'jspdf';

function TrainETicketPDF({ trainName, departureTime, source, destination, passengerName, seatNumber, fare }) {
  function generatePDF() {
    const doc = new jsPDF();

    // Set font size and color
    doc.setFontSize(20);
    doc.setTextColor('#2196f3');

    // Add train name
    doc.text(trainName, 105, 25, null, null, 'center');

    // Set font size and color
    doc.setFontSize(12);
    doc.setTextColor('#000000');

    // Add departure and arrival times
    doc.text(`Departure Time: ${departureTime}`, 10, 50);

    // Set font size and color
    doc.setFontSize(16);
    doc.setTextColor('#2196f3');

    // Add source and destination cities
    doc.text('From', 40, 80);
    doc.text('To', 170, 80);
    doc.text(source, 30, 95, null, null, 'center');
    doc.text(destination, 160, 95, null, null, 'center');

    // Set font size and color
    doc.setFontSize(12);
    doc.setTextColor('#000000');

    // Add passenger name, seat number, and fare
    doc.text(`Passenger Name: ${passengerName}`, 10, 120);
    doc.text(`Seat Number: ${seatNumber}`, 10, 130);
    doc.text(`Fare: ${fare}`, 10, 140);

    // Save the PDF
    doc.save('TrainETicket.pdf');
  }

  return (
    <div>
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
}

export default TrainETicketPDF;

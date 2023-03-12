import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import Header from "./Components/Home/Navbar/Header";
import Footer from "./Components/Footer/Footer";
import Profile from "./Components/Profile/Profile";
import Tracking from "./Components/Tracking/Tracking"
import BookingPage from "./pages/BookingPage";
import TransactionsPage from "./pages/TransactionsPage";
import TrainETicketPDF from "./Components/TicketPDF/TicketPdf";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/transaction" element={<TransactionsPage />} />
      </Routes>
      <Footer />
      {/* <TrainETicketPDF
        trainName="Express Train"
        departureTime="10:00 AM"
        arrivalTime="12:00 PM"
        source="New York"
        destination="Boston"
        passengerName="John Smith"
        seatNumber="A12"
        fare="$50"
      /> */}
    </React.Fragment>
  );
};
export default App;

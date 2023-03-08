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
    </React.Fragment>
  );
};
export default App;

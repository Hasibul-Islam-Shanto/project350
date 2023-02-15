import React from "react";
import Cards from "../Components/Home/Cards/Cards";
import Hero from "../Components/Home/Hero/Hero";
import Header from "../Components/Home/Navbar/Header";
const HomePage = () => {
  return (
    <React.Fragment>
      <Hero />
      <Cards />
    </React.Fragment>
  );
};

export default HomePage;

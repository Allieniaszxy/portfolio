import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Curriculum from "../components/Curriculum";
import Work from "../components/Work";
import Projects from "../components/Projects";
import Idea from "../components/Idea";
import Services from "../components/Services";
import Clients from "../components/Clients";
import Footer from "../components/Footer";

const Portfolio = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Curriculum />
      <Work />
      <Projects />
      <Idea />
      <Services />
      <Clients />
      <Footer />
    </div>
  );
};

export default Portfolio;

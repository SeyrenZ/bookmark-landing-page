import React from "react";
import Header from "./components/header";
import Features from "./components/features";
import Extension from "./components/extension";
import Accordion from "./components/accordion";
import Footer from "./components/footer";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Features />
      <Extension />
      <Accordion />
      <Footer />
    </main>
  );
};

export default Home;

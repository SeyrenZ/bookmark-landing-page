import React from "react";
import Header from "./components/header";
import Features from "./components/features";
import Extension from "./components/extension";
import Accordion from "./components/accordion";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Features />
      <Extension />
      <Accordion />
    </main>
  );
};

export default Home;

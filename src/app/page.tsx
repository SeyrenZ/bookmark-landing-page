import React from "react";
import Header from "./components/header";
import Features from "./components/features";
import Extension from "./components/extension";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Features />
      <Extension />
    </main>
  );
};

export default Home;

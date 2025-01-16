import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import TrendingMovie from "../components/TrendingMovie";
import Populer from "../components/Populer";
import JoinArea from "../components/JoinArea";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <TrendingMovie/>
      <Populer/>
      <JoinArea/>
    </div>
  );
};

export default Home;

import React from "react";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import HowDoesItWork from "./HowDoesItWork";
import Navbar from "./Navbar";
import SendingMoney from "./SendingMoney";
import UseApp from "./UseApp";
import UseApp2 from "./useApp2";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <HowDoesItWork />
        <UseApp />
        <UseApp2 />
        <SendingMoney />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;

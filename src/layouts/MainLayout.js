// *Dependencies
import React from "react";
import Footer from "../components/Footer";
// *Components
import Header from "./../components/Header";

const MainLayout = (props) => {
  return (
    <div>
      <Header />
      <div className="main">{props.children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;

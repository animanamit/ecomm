import React from "react";
import "./homepage.styles.css";
import Directory from "../../components/directory/directory.component";
import Header from "../../components/header/header.component";

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <Directory />
    </div>
  );
};

export default HomePage;

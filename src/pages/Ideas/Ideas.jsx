import React from "react";
import Header from "../../components/header/Header";
import Saidbar from "../../components/Sidebar/Sidebar";
const Ideas = () => {
  return (
    <div className="ideas">
      <Saidbar props={"ideas"} />
      <div className="container">
        <Header titleName={"Ideas"} search={false} />
      </div>
    </div>
  );
};

export default Ideas;

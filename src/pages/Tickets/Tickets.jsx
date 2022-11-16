import React from "react";
import Header from "../../components/header/Header";
import Saidbar from "../../components/Sidebar/Sidebar";
const Tickets = () => {
  return (
    <div className="tickets">
      <Saidbar props={"tickets"} />
      <div className="container">
        <Header titleName={"Tickets"} search={true} />
      </div>
    </div>
  );
};

export default Tickets;

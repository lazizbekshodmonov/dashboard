import React from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Contacts() {
  return (
    <div className="contacts">
      <Sidebar props={"contacts"} />
      <div className="container">
        <Header titleName={"Contacts"} search={false} />
      </div>
    </div>
  );
}

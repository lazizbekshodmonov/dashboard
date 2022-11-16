import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/header/Header";

export default function Agents() {
  return (
    <div className="agents">
      <Sidebar props={"agents"} />
      <div className="container">
        <Header titleName={"Agents"} search={false} />
      </div>
    </div>
  );
}

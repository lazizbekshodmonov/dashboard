import React from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
export default function Articles() {
  return (
    <div className="articles">
      <Sidebar props={"articles"} />
      <div className="container">
        <Header titleName={"Articles"} search={false} />
      </div>
    </div>
  );
}

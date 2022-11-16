import React from "react";
import Header from "./HeaderOverview";
export default function TodayTasks() {
  return (
    <div className="TodayTasks">
      <Header title={"Tasks"} viewDetails={"/overview"} />
    </div>
  );
}

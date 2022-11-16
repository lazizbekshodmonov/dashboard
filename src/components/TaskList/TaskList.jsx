import React from "react";
import TodayTasks from "./TodayTasks";
import UnresolvedTickets from "./UnresolvedTickets";

export default function TaskList() {
  return (
    <div className="TaskList">
      <UnresolvedTickets />
      <TodayTasks />
    </div>
  );
}

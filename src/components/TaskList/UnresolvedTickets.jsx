import React from "react";
import Header from "./HeaderOverview";

export default function UnresolvedTickets() {
  return (
    <div className="UnresolvedTickets">
      <Header title={"Unresolved Tickets"} viewDetails={"/tickets"} />
      <p className="group">
        Group: <span className="group_type">Support</span>
      </p>
    </div>
  );
}

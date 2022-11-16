import React from "react";
import DashboardChart from "./DashboardChart";
import Indicators from "./Indicators";

export default function Statistics() {
  return (
    <div className="Statistics">
      <DashboardChart />
      <Indicators />
    </div>
  );
}

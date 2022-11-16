import React from "react";

export default function Indicators() {
  const list = [
    { type: "Resolved", indicator: 449 },
    { type: "Received", indicator: 426 },
    { type: "Average first response time", indicator: "33m" },
    { type: "Average response time", indicator: "3h 8m" },
    { type: "Resolution within SLA", indicator: "94%" },
  ];
  return (
    <div className="indicators">
      {list.map((item) => (
        <div className="indicators_item" key={item.indicator}>
          <h4 className="indicator_type">{item.type}</h4>
          <h2 className="indicator_number">{item.indicator}</h2>
        </div>
      ))}
    </div>
  );
}

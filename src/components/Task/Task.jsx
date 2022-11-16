import React from "react";
import "./Task.scss";
export default function Task() {
  const data = [
    { type: "Unresolved", measure: 60 },
    { type: "Overdue", measure: 16 },
    { type: "Open", measure: 43 },
    { type: "On hold", measure: 64 },
  ];
  return (
    <div className="Task">
      {data.map((item) => (
        <div className="task_item" key={item.type}>
          <h4 className="type">{item.type}</h4>
          <h2 className="measure">{item.measure}</h2>
        </div>
      ))}
    </div>
  );
}

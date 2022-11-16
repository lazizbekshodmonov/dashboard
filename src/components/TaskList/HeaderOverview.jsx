import React from "react";
import { Link } from "react-router-dom";
export default function HeaderOverview({ title, viewDetails }) {
  return (
    <div className="HeaderOverview">
      <div className="header_tickets">
        <h3 className="title">{title}</h3>
        <Link to={viewDetails}>
          <p className="view_details">View details</p>
        </Link>
      </div>
    </div>
  );
}

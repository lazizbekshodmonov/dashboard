import React from "react";
const DashboardChart = () => {
  return (
    <div className="dashboard_chart">
      <h2 className="title">Today's trends</h2>
      <div className="time_trends">
        <p className="time">as of 25 May 2019, 09:41 PM</p>
        <div className="indicator_colors">
          <div className="today">
            <span className="today_color"></span>
            <p>Today</p>
          </div>
          <div className="yesterday">
            <span className="yesterday_color"></span>
            <p>Yesterday</p>
          </div>
        </div>
      </div>
      <canvas id="canvas"></canvas>
    </div>
  );
};

export default DashboardChart;

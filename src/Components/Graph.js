import React from "react";
import DonutChart from "./DonutChart";
import LineChart from "./LineChart";
import "../styles/Graph.css";

const Graph = ({ total, selectedState, statewise, dailyState, last7total }) => {
  return (
    <div className="graph">
      <div className="donut">
        <DonutChart
          total={total}
          selectedState={selectedState}
          statewise={statewise}
        />
      </div>
      <div className="line">
        <LineChart
          selectedState={selectedState}
          dailyState={dailyState}
          last7total={last7total}
        />
      </div>
    </div>
  );
};

export default Graph;

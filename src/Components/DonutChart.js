import React from "react";
import DonutChart from "react-donut-chart";

const Donut = ({ total, selectedState, statewise }) => {
  let data;
  const fun = () => {
    if (selectedState === "None") {
      data = total;
      return;
    } else {
      for (let i = 0; i < statewise.length; i++) {
        if (statewise[i].state === selectedState) {
          data = statewise[i];
          return;
        }
      }
    }
  };
  return (
    <div className="donut">
      {fun()}
      <h3>Confirmed: {data.confirmed}</h3>
      {data && (
        <DonutChart
          height={190}
          width={290}
          data={[
            {
              label: "Active",
              value: parseInt(data.active),
            },
            {
              label: "Deceased",
              value: parseInt(data.deaths),
            },
            {
              label: "Recovered",
              value: parseInt(data.recovered),
            },
          ]}
          colors={["#4e68f8", "#919297", "#76ff76"]}
          colorFunction={(colors, index) => colors[index % colors.length]}
        />
      )}
    </div>
  );
};

export default Donut;

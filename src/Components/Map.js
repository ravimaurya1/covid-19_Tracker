import React from "react";
import India from "./IndiaMap";

//CSS
import "../styles/Map.css";

const Map = ({
  total,
  statewise,
  selectedState,
  dailyState,
  setSelectedState,
}) => {
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
    <div>
      {fun()}
      <div className="mapheading">
        <h1>India Map</h1>
        <p>HOVER OVER A STATE FOR MORE DETAILS</p>
      </div>
      <div className="ravi">
        <div className="Details">
          <div className="Confirmed">
            <h3>CONFIRMED</h3>
            <p>{data.confirmed}</p>
          </div>
          <div className="Active">
            <h3>ACTIVE</h3>
            <p>{data.active}</p>
          </div>
          <div className="Recovered">
            <h3>RECOVERED</h3>
            <p>{data.recovered}</p>
          </div>
          <div className="Deceased">
            <h3>DECEASED</h3>
            <p>{data.deaths}</p>
          </div>
        </div>
        <div className="Last">
          <h4>LAST UPDATED</h4>
          <h4>{data.lastupdatedtime}</h4>
        </div>
        {dailyState.length > 0 && (
          <div className="Map">
            <India
              dailyState={dailyState}
              setSelectedState={setSelectedState}
              selectedState={selectedState}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Map;

import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import ReactTooltip from "react-tooltip";

import LinearGradient from "./LinearGradient.js";
// import "./App.css";

/**
 * Courtesy: https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json
 * Looking topojson for other countries/world?
 * Visit: https://github.com/markmarkoh/datamaps
 */
const INDIA_TOPO_JSON = require("../india.topo.json");

const PROJECTION_CONFIG = {
  scale: 750,
  center: [78.9629, 22.5937], // always in [East Latitude, North Longitude]
};

// Red Variants
const COLOR_RANGE = [
  "#ffedea",
  "#ffcec5",
  "#ffad9f",
  "#ff8a75",
  "#ff5533",
  "#e2492d",
  "#be3d26",
  "#9a311f",
  "#782618",
];

const DEFAULT_COLOR = "#EEE";

const getRandomInt = () => {
  return parseInt(Math.random() * 100);
};

const geographyStyle = {
  default: {
    outline: "none",
  },
  hover: {
    fill: "#ccc",
    transition: "all 250ms",
    outline: "none",
  },
  pressed: {
    outline: "none",
  },
};

// will generate random heatmap data on every call

function App({ dailyState, setSelectedState, selectedState }) {
  const [tooltipContent, setTooltipContent] = useState("");

  const getDaily = (name) => {
    return parseInt(dailyState[18][name]);
  };

  const getHeatMapData = () => {
    return [
      { id: "AP", state: "Andhra Pradesh", value: getDaily("ap") },
      { id: "AR", state: "Arunachal Pradesh", value: getDaily("ar") },
      { id: "AS", state: "Assam", value: getDaily("as") },
      { id: "BR", state: "Bihar", value: getDaily("br") },
      { id: "CT", state: "Chhattisgarh", value: getDaily("ct") },
      { id: "GA", state: "Goa", value: getDaily("ga") },
      { id: "GJ", state: "Gujarat", value: getDaily("gj") },
      { id: "HR", state: "Haryana", value: getDaily("hr") },
      { id: "HP", state: "Himachal Pradesh", value: getDaily("hp") },
      { id: "JH", state: "Jharkhand", value: getDaily("jh") },
      { id: "KA", state: "Karnataka", value: getDaily("ka") },
      { id: "KL", state: "Kerala", value: getDaily("kl") },
      { id: "MP", state: "Madhya Pradesh", value: getDaily("mp") },
      { id: "MH", state: "Maharashtra", value: getDaily("mh") },
      { id: "MN", state: "Manipur", value: getDaily("mn") },
      { id: "ML", state: "Meghalaya", value: getDaily("ml") },
      { id: "MZ", state: "Mizoram", value: getDaily("mz") },
      { id: "NL", state: "Nagaland", value: getDaily("nl") },
      { id: "OR", state: "Odisha", value: getDaily("or") },
      { id: "PB", state: "Punjab", value: getDaily("pb") },
      { id: "RJ", state: "Rajasthan", value: getDaily("rj") },
      { id: "SK", state: "Sikkim", value: getDaily("sk") },
      { id: "TN", state: "Tamil Nadu", value: getDaily("tn") },
      { id: "TG", state: "Telangana", value: getDaily("tg") },
      { id: "TR", state: "Tripura", value: getDaily("tr") },
      { id: "UT", state: "Uttarakhand", value: getDaily("ut") },
      { id: "UP", state: "Uttar Pradesh", value: getDaily("up") },
      { id: "WB", state: "West Bengal", value: getDaily("wb") },
      { id: "WB", state: "West Bengal", value: getDaily("wb") },
      { id: "AN", state: "Andaman and Nicobar Islands", value: getDaily("an") },
      { id: "CH", state: "Chandigarh", value: getDaily("ch") },
      { id: "DN", state: "Dadra and Nagar Haveli", value: getDaily("dn") },
      { id: "DD", state: "Daman and Diu", value: getDaily("dd") },
      { id: "DL", state: "Delhi", value: getDaily("dl") },
      { id: "JK", state: "Jammu and Kashmir", value: getDaily("jk") },
      { id: "LA", state: "Ladakh", value: getDaily("la") },
      { id: "LD", state: "Lakshadweep", value: getDaily("ld") },
      { id: "PY", state: "Puducherry", value: getDaily("py") },
    ];
  };

  const [data, setData] = useState(getHeatMapData());
  const gradientData = {
    fromColor: COLOR_RANGE[0],
    toColor: COLOR_RANGE[COLOR_RANGE.length - 1],
    min: 0,
    max: data.reduce((max, item) => (item.value > max ? item.value : max), 0),
  };

  const colorScale = scaleQuantile()
    .domain(data.map((d) => d.value))
    .range(COLOR_RANGE);

  const onMouseEnter = (geo, current = { value: "NA" }) => {
    return () => {
      console.log(geo.properties.name);
      if (geo.properties.name === "Dadara & Nagar Havelli") {
        setSelectedState("Dadra and Nagar Haveli and Daman and Diu");
      } else if (geo.properties.name === "Andaman & Nicobar Island") {
        setSelectedState("Andaman and Nicobar Islands");
      } else if (geo.properties.name === "Arunanchal Pradesh") {
        setSelectedState("Arunachal Pradesh");
      } else if (geo.properties.name === "NCT of Delhi") {
        setSelectedState("Delhi");
      } else if (geo.properties.name === "Jammu & Kashmir") {
        setSelectedState("Jammu and Kashmir");
      } else {
        setSelectedState(geo.properties.name);
      }
      setTooltipContent(`${geo.properties.name}: ${current.value}`);
    };
  };

  const onMouseLeave = () => {
    setSelectedState("None");
    setTooltipContent("");
  };

  const onChangeButtonClick = () => {
    setData(getHeatMapData());
  };

  return (
    <div className="full-width-height container">
      <h1 className="no-margin center">{`State--${selectedState}`}</h1>
      <ReactTooltip>{tooltipContent}</ReactTooltip>
      <ComposableMap
        projectionConfig={PROJECTION_CONFIG}
        projection="geoMercator"
        width={800}
        height={500}
        data-tip=""
      >
        <Geographies geography={INDIA_TOPO_JSON}>
          {({ geographies }) =>
            geographies.map((geo) => {
              //console.log(geo.id);
              const current = data.find((s) => s.id === geo.id);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={current ? colorScale(current.value) : DEFAULT_COLOR}
                  style={geographyStyle}
                  onMouseEnter={onMouseEnter(geo, current)}
                  onMouseLeave={onMouseLeave}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}

export default App;

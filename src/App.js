import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

//Components
import Table from "./Components/Table";
import CovidTitle from "./Components/CovidTitle";
import Graph from "./Components/Graph";
import Map from "./Components/Map";

function App() {
  const [data, setData] = useState({});
  const [total, setTotal] = useState({});
  const [statewise, setStatewise] = useState([]);
  const [selectedState, setSelectedState] = useState("None");
  const [dailyState, setDailyState] = useState([]); // Last 7 days
  const [last7total, setLast7Total] = useState([]);
  useEffect(() => {
    let fetch_data;
    axios.get("https://api.covid19india.org/data.json").then((data) => {
      fetch_data = data.data;
      let cases_time_series = fetch_data.cases_time_series;
      cases_time_series.splice(0, cases_time_series.length - 7);
      setLast7Total(cases_time_series);
      console.log(fetch_data);
      setData(fetch_data);
      setTotal(fetch_data.statewise[0]);
      let temp = fetch_data.statewise;
      temp.splice(0, 1);
      setStatewise(temp);
    });
    // Filter and set the value for daily statewise Covid Data
    axios.get("https://api.covid19india.org/states_daily.json").then((data) => {
      let fetch_data = data.data.states_daily;
      fetch_data.splice(0, fetch_data.length - 21);
      // console.log(fetch_data);
      setDailyState(fetch_data);
    });
  }, []);
  return (
    <>
    {dailyState.length > 0 && (
    <div className="App">
      <div className="left">
        <CovidTitle />
        <Graph
          total={total}
          statewise={statewise}
          selectedState={selectedState}
          dailyState={dailyState}
          last7total={last7total}
        />
        <Table statewise={statewise} setSelectedState={setSelectedState} />
      </div>
      <div className="right">
        <Map
          selectedState={selectedState}
          total={total}
          statewise={statewise}
          dailyState={dailyState}
          setSelectedState={setSelectedState}
        />
      </div>
    </div>
    )}
    </>
  );
}

export default App;

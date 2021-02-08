import React from "react";
import "../styles/Table.css";

const Table = ({ statewise, setSelectedState }) => {
  const renderTable = () => {
    const arr = statewise.map((data, index) => {
      const { state, confirmed, active, recovered, deaths, statecode } = data;
      return (
        <tr
          onMouseEnter={() => {
            setSelectedState(state);
          }}
          onMouseLeave={() => {
            setSelectedState("None");
          }}
          key={statecode}
        >
          <td>{state}</td>
          <td>{confirmed}</td>
          <td>{active}</td>
          <td>{recovered}</td>
          <td>{deaths}</td>
        </tr>
      );
    });
    return arr;
  };
  return (
    <div className="tablediv">
      <table className="table">
        <thead>
          <tr>
            <th>STATE/UT</th>
            <th>CONFIRMED</th>
            <th>ACTIVE</th>
            <th>RECOVERED</th>
            <th>DECEASED</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
};

export default Table;

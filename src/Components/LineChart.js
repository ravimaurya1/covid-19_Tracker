import React from "react";
import LineChart from "react-linechart";
import "../../node_modules/react-linechart/dist/styles.css";

const state_map = {
  "Andhra Pradesh": "ap",
  "Arunachal Pradesh": "ar",
  Assam: "as",
  Bihar: "br",
  Chhattisgarh: "ct",
  Goa: "ga",
  Gujarat: "gj",
  Haryana: "hr",
  "Himachal Pradesh": "hp",
  Jharkhand: "jh",
  Karnataka: "ka",
  Kerala: "kl",
  "Madhya Pradesh": "mp",
  Maharashtra: "mh",
  Manipur: "mn",
  Meghalaya: "ml",
  Mizoram: "mz",
  Nagaland: "nl",
  Odisha: "or",
  Punjab: "pb",
  Rajasthan: "rj",
  Sikkim: "sk",
  "Tamil Nadu": "tn",
  Telangana: "tg",
  Tripura: "tr",
  Uttarakhand: "ut",
  "Uttar Pradesh": "up",
  "West Bengal": "wb",
  "West Bengal": "wb",
  "Andaman and Nicobar Islands": "an",
  Chandigarh: "ch",
  "Dadra and Nagar Haveli and Daman and Diu": "dn",
  "Daman and Diu": "dd",
  Delhi: "dl",
  "Jammu and Kashmir": "jk",
  Ladakh: "la",
  Lakshadweep: "ld",
  Puducherry: "py",
};

const Line = ({ selectedState, dailyState, last7total }) => {
  let data_show;
  const fun = () => {
    if (selectedState === "None") {
      data_show = [
        {
          color: "red",
          points: [
            {
              x: 1,
              y: parseInt(last7total[0].dailyconfirmed),
            },
            {
              x: 2,
              y: parseInt(last7total[1].dailyconfirmed),
            },
            {
              x: 3,
              y: parseInt(last7total[2].dailyconfirmed),
            },
            {
              x: 4,
              y: parseInt(last7total[3].dailyconfirmed),
            },
            {
              x: 5,
              y: parseInt(last7total[4].dailyconfirmed),
            },
            {
              x: 6,
              y: parseInt(last7total[5].dailyconfirmed),
            },
            {
              x: 7,
              y: parseInt(last7total[6].dailyconfirmed),
            },
          ],
        },
        {
          color: "green",
          points: [
            {
              x: 1,
              y: parseInt(last7total[0].dailyrecovered),
            },
            {
              x: 2,
              y: parseInt(last7total[1].dailyrecovered),
            },
            {
              x: 3,
              y: parseInt(last7total[2].dailyrecovered),
            },
            {
              x: 4,
              y: parseInt(last7total[3].dailyrecovered),
            },
            {
              x: 5,
              y: parseInt(last7total[4].dailyrecovered),
            },
            {
              x: 6,
              y: parseInt(last7total[5].dailyrecovered),
            },
            {
              x: 7,
              y: parseInt(last7total[6].dailyrecovered),
            },
          ],
        },
        {
          color: "grey",
          points: [
            {
              x: 1,
              y: parseInt(last7total[0].dailydeceased),
            },
            {
              x: 2,
              y: parseInt(last7total[1].dailydeceased),
            },
            {
              x: 3,
              y: parseInt(last7total[2].dailydeceased),
            },
            {
              x: 4,
              y: parseInt(last7total[3].dailydeceased),
            },
            {
              x: 5,
              y: parseInt(last7total[4].dailydeceased),
            },
            {
              x: 6,
              y: parseInt(last7total[5].dailydeceased),
            },
            {
              x: 7,
              y: parseInt(last7total[6].dailydeceased),
            },
          ],
        },
      ];
    } else {
      data_show = [
        {
          color: "red",
          points: [
            {
              x: 1,
              y: parseInt(dailyState[0][state_map[selectedState]]),
            },
            {
              x: 2,
              y: parseInt(dailyState[3][state_map[selectedState]]),
            },
            {
              x: 3,
              y: parseInt(dailyState[6][state_map[selectedState]]),
            },
            {
              x: 4,
              y: parseInt(dailyState[9][state_map[selectedState]]),
            },
            {
              x: 5,
              y: parseInt(dailyState[12][state_map[selectedState]]),
            },
            {
              x: 6,
              y: parseInt(dailyState[15][state_map[selectedState]]),
            },
            {
              x: 7,
              y: parseInt(dailyState[18][state_map[selectedState]]),
            },
          ],
        },
        {
          color: "green",
          points: [
            {
              x: 1,
              y: parseInt(dailyState[1][state_map[selectedState]]),
            },
            {
              x: 2,
              y: parseInt(dailyState[4][state_map[selectedState]]),
            },
            {
              x: 3,
              y: parseInt(dailyState[7][state_map[selectedState]]),
            },
            {
              x: 4,
              y: parseInt(dailyState[10][state_map[selectedState]]),
            },
            {
              x: 5,
              y: parseInt(dailyState[13][state_map[selectedState]]),
            },
            {
              x: 6,
              y: parseInt(dailyState[16][state_map[selectedState]]),
            },
            {
              x: 7,
              y: parseInt(dailyState[19][state_map[selectedState]]),
            },
          ],
        },
        {
          color: "grey",
          points: [
            {
              x: 1,
              y: parseInt(dailyState[2][state_map[selectedState]]),
            },
            {
              x: 2,
              y: parseInt(dailyState[5][state_map[selectedState]]),
            },
            {
              x: 3,
              y: parseInt(dailyState[8][state_map[selectedState]]),
            },
            {
              x: 4,
              y: parseInt(dailyState[11][state_map[selectedState]]),
            },
            {
              x: 5,
              y: parseInt(dailyState[14][state_map[selectedState]]),
            },
            {
              x: 6,
              y: parseInt(dailyState[17][state_map[selectedState]]),
            },
            {
              x: 7,
              y: parseInt(dailyState[20][state_map[selectedState]]),
            },
          ],
        },
      ];
    }
  };
  //   const data = [
  //     {
  //       color: "steelblue",
  //       points: [
  //         { x: 1, y: 2 },
  //         { x: 3, y: 5 },
  //         { x: 7, y: -3 },
  //       ],
  //     },
  //   ];
  return (
    <div>
      {fun()}
      <div className="App">
        {data_show && (
          <LineChart
            xLabel=""
            yLabel=""
            width={250}
            height={170}
            data={data_show}
            hideXAxis={true}
            hideYAxis={true}
          />
        )}
      </div>
    </div>
  );
};

export default Line;

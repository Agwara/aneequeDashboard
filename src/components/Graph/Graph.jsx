import React from "react";
import { Bar } from 'react-chartjs-2';

import "./Graph.css";

const Graph = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: '# of Expenses',
        data: [10, 4, 3, 5, 2, 3, 7, 8, 1, 7, 8, 4],
        backgroundColor: [
          '#347AE2',
          '#347AE2',
          '#347AE2',
          '#347AE2',
          '#347AE2',
          '#347AE2',
          '#347AE2',
          '#347AE2',
          '#347AE2',
          '#347AE2',
          '#347AE2',
          '#347AE2'
        ],
        borderColor: [
          "white"
        ],

        borderRadius: ["50"],

        borderWidth: 1
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            suggestedMin: 0,
            suggestedMax: 10
          },
        },
      ],
    },
  };

  return (
    <div className="graph hide-scroll-bar">
      <Bar 
        data={data} 
        options={options}
      />
    </div>
  )
}

export default Graph;
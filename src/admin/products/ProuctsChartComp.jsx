import React, { useMemo, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

export const ProuctsChartComp = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

  const { adminOrders } = useSelector((state) => state.admin);
  const orders = adminOrders.map((global) => global.order);
  const mostWanted = orders.map((global) => {
    return global.map((prod) => prod.title);
  });
  //   console.log(mostWanted);

  let mf = 1;
  let m = 0;
  let item;
  for (let i = 0; i < mostWanted[6].length; i++) {
    for (let j = i; j < mostWanted[6].length; j++) {
      if (mostWanted[6][i] == mostWanted[6][j]) m++;
      if (mf < m) {
        mf = m;
        item = mostWanted[6][i];
      }
    }
    m = 0;
  }
  console.log(item, mf);

  const data = useMemo(() => {
    return {
      datasets: [
        {
          label: "Products",
          data: [mf],
          tension: 0.3,
          borderColor: "#4d0a99",
          backgroundColor: "#4d0a99",
          //   segment: {
          //     borderColor: (context) => (context.p1 > 1000 ? "green" : "red"),
          //   },
        },
      ],
      labels: [item],
    };
  }, []);

  const options = {
    fill: false,
    responsive: true,
    scales: {
      y: {
        min: 0,
      },
    },
  };

  return (
    <>
      <div className="row mt-5">
        <div className="col mt-5">
          <h2 className="text-center text-color-1 fw-bold">
            Most wanted products
          </h2>
        </div>
      </div>
      <div className="col-12 mt-3">
        <Bar data={data} options={options} />
      </div>
    </>
  );
};

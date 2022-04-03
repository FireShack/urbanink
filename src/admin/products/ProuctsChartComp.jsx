import React, { useMemo } from "react";
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
  const data = useMemo(() => {
    return {
      datasets: [
        {
          label: "Products",
          data: [12, 12, 54],
          tension: 0.3,
          borderColor: "#4d0a99",
          backgroundColor: "#4d0a99",
          //   segment: {
          //     borderColor: (context) => (context.p1 > 1000 ? "green" : "red"),
          //   },
        },
      ],
      labels: ["prod 1", "prod  2", "prod 3"],
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

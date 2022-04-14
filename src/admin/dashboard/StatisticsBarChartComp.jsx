import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

export const StatisticsBarChartComp = () => {
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

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const { adminMonthlyEarned, adminMonthEarnedData } = useSelector(
    (state) => state.admin
  );
  const dateMonth = new Date().getMonth() + 1;
  const prevMonthh = adminMonthlyEarned.filter(
    (products) =>
      products.month === (dateMonth - 2 === -2 ? dateMonth + 12 : dateMonth - 2)
  );
  const earnedprevMonth = prevMonthh.map((prod) => Number(prod.earned));
  const totalPrevMonth = earnedprevMonth.reduce((a, b) => a + b, 0);
  const lastMonthh = adminMonthlyEarned.filter(
    (products) =>
      products.month === (dateMonth - 1 === -1 ? dateMonth + 11 : dateMonth - 1)
  );
  const earnedLastMonth = lastMonthh.map((prod) => Number(prod.earned));
  const totalLastMonth = earnedLastMonth.reduce((a, b) => a + b, 0);

  const totalMonth = adminMonthEarnedData.reduce(
    (a, b) => Number(a) + Number(b),
    0
  );
  const scores = [totalPrevMonth, totalLastMonth, totalMonth]; //Y
  const labels = [
    adminMonthlyEarned.length > 0
      ? months[
          prevMonthh[0].month - 1 === undefined
            ? "Nov"
            : prevMonthh[0].month - 1
        ]
      : "Loading...",
    adminMonthlyEarned.length > 0
      ? months[
          lastMonthh[0].month - 1 === undefined
            ? "Dec"
            : lastMonthh[0].month - 1
        ]
      : "Loading...",
    months[dateMonth - 1],
  ]; //X

  const data = {
    datasets: [
      {
        label: "Monthly Incomes",
        data: scores,
        tension: 0.3,
        borderColor: "green",
        backgroundColor: [
          "green",
          "green",
          `${totalMonth > totalLastMonth ? "green" : "red"}`,
        ],
      },
    ],
    labels: labels,
  };

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
    <div className="row">
      <Bar data={data} options={options} />
    </div>
  );
};

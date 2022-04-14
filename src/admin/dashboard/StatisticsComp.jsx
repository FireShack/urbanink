import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

export const StatisticsComp = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );
  const { adminMonthlyEarned, adminMonthEarnedData } = useSelector(
    (state) => state.admin
  );
  const dateMonth = new Date().getMonth() + 1;

  // const prevPrevMonthh = adminMonthlyEarned.filter(
  //   (products) => products.month === dateMonth - 3
  // );

  // const earnedprevprevMonth = prevPrevMonthh.map((prod) => Number(prod.earned));
  // const totalPrevPrevMonth = earnedprevprevMonth.reduce((a, b) => a + b, 0);

  const prevMonthh = adminMonthlyEarned.filter(
    (products) => products.month === dateMonth - 2
  );
  const earnedprevMonth = prevMonthh.map((prod) => Number(prod.earned));
  const totalPrevMonth = earnedprevMonth.reduce((a, b) => a + b, 0);
  // const prevMonthPer =
  //   ((totalPrevMonth - totalPrevPrevMonth) / totalPrevPrevMonth) * 100;

  const lastMonthh = adminMonthlyEarned.filter(
    (products) => products.month === dateMonth - 1
  );
  const earnedLastMonth = lastMonthh.map((prod) => Number(prod.earned));
  const totalLastMonth = earnedLastMonth.reduce((a, b) => a + b, 0);
  // const totalLastMonthPer =
  //   ((totalLastMonth - totalPrevMonth) / totalPrevMonth) * 100;

  const totalMonth = adminMonthEarnedData.reduce(
    (a, b) => Number(a) + Number(b),
    0
  );
  const earned = ((totalMonth - totalLastMonth) / totalLastMonth) * 100;
  earned.toFixed();
  const scores = [totalPrevMonth, totalLastMonth, totalMonth]; //Y
  const labels = ["Jan", "Feb", "Mar"]; //X

  const data = useMemo(() => {
    return {
      datasets: [
        {
          label: "Monthly Incomes",
          data: scores,
          tension: 0.3,
          borderColor: "green",
          backgroundColor: "green",
        },
      ],
      labels: labels,
    };
  }, [labels, scores]);

  const options = {
    fill: false,
    responsive: true,
    scales: {
      y: {
        min: 0,
      },
    },
  };

  // return (
  //   <div className="row">
  //     <Line data={data} options={options} />
  //   </div>
  // );
};

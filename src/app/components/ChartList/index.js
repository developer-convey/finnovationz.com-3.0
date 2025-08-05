import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const CHART_TYPES = {
  line: "line",
  bar: "bar",
  doughnut: "doughnut",
};

const ChartList = ({ labels, datasets, chartType, firstChartBoll }) => {
  const chartRef = useRef(null);
  let myChart = null;

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    if (myChart) {
      myChart.destroy();
    }

    const selectedChartType = CHART_TYPES[chartType] || CHART_TYPES.line;

    myChart = new Chart(ctx, {
      type: selectedChartType,
      data: {
        labels: labels,
        datasets: datasets.map((dataset) => {
          let startIndex = 0;
          let data = [];
          let newLabels = [];

          if (dataset.labels) {
            startIndex = dataset.labels.findIndex((label) =>
              labels.includes(label)
            );
            data = startIndex !== -1 ? dataset.data.slice(startIndex) : [];
            newLabels =
              startIndex !== -1 ? dataset.labels.slice(startIndex) : [];
          }

          return {
            ...dataset,
            data: data,
            labels: newLabels,
          };
        }),
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          y: {
            display: selectedChartType !== CHART_TYPES.doughnut,
            ticks: {
              beginAtZero: true,
              min: 0,
              maxTicksLimit: 10,
              // Add this callback function to format the labels
              callback: function (value, index, values) {
                // Divide the value by 100000 and append 'L'
                return firstChartBoll ? value / 100000 + "L" : value;
              },
            },
            grid: {
              borderDash: [10, 5],
            },
          },
          x: {
            display: selectedChartType !== CHART_TYPES.doughnut,
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            position:
              selectedChartType === CHART_TYPES.doughnut ? "left" : "top",
            align:
              selectedChartType === CHART_TYPES.doughnut ? "center" : "end",
            labels: {
              padding: selectedChartType === CHART_TYPES.doughnut ? 20 : 10,
              usePointStyle: true,
            },
            display:
              selectedChartType === CHART_TYPES.doughnut ? "circle" : true,
          },
          tooltip: {
            usePointStyle: true,
          },
        },
        elements: {
          point: {
            radius: (context) =>
              selectedChartType === CHART_TYPES.line &&
              context.dataIndex === context.dataset.data.length - 1
                ? 8
                : 4,
          },
        },
      },
    });

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [labels, datasets, chartType]);

  return <canvas ref={chartRef} />;
};

export default ChartList;

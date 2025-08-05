import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const CHART_TYPES = {
  line: "line",
  bar: "bar",
  doughnut: "doughnut",
};

const ChartList = ({ labels, datasets, chartType, bool, firstChartBoll }) => {
  const [isMobile, setIsMobile] = useState(false);
  const chartRef = useRef(null);
  let myChart = null;



  useEffect(() => {
    const handleResize = () => {
      // Check if window is defined to ensure code runs only in the browser
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= 768);
      }
    };

    handleResize(); // Call handleResize initially to set the initial value

    // Add event listener for the resize event
    typeof window !== "undefined" &&
      window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      typeof window !== "undefined" &&
        window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        datasets: datasets,
      },
      options: {
        maintainAspectRatio: false,
        cutout:
          isMobile && selectedChartType === CHART_TYPES.doughnut ? 110 : 100,
        scales: {
          y: {
            display: selectedChartType !== CHART_TYPES.doughnut,
            ticks: {
              beginAtZero: true,
              min: 0,
              maxTicksLimit: 10,
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
              selectedChartType === CHART_TYPES.doughnut
                ? isMobile
                  ? "bottom"
                  : "left"
                : undefined,
            align:
              selectedChartType === CHART_TYPES.doughnut ? "start" : "center",
            labels: {
              padding: selectedChartType === CHART_TYPES.doughnut ? 20 : 10,
              usePointStyle: true,
              font: {
                size:
                  isMobile && selectedChartType === CHART_TYPES.doughnut
                    ? 12
                    : bool
                    ? 12
                    : 22, // Adjust font size based on mobile or desktop
              },
            },
            display: true,
          },
          tooltip: {
            usePointStyle: true,
            bodyFont: {
              size: isMobile ? 12 : 14, // Adjust tooltip font size based on mobile or desktop
            },
          },
          customCss: {
            // Custom plugin to apply CSS to labels
            beforeDraw: (chart) => {
              const ctx = chart.ctx;
              ctx.save();
              ctx.textAlign = "justify"; // Justify content
              ctx.textBaseline = "middle";
              const labels = chart.data.labels;
              const fontSize = 12; // Customize font size here
              ctx.font = `${fontSize}px Arial`;

              const padding = 5; // Adjust padding between labels

              labels.forEach((label, index) => {
                const y = chart.getDatasetMeta(0).data[index].y;
                ctx.fillText(label, chart.width / 2, y + padding * index);
              });

              ctx.restore();
            },
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

    const handleResize = () => {
      if (myChart && selectedChartType === CHART_TYPES.doughnut) {
        myChart.options.cutout = isMobile ? 70 : 120;
        myChart.options.plugins.legend.position = isMobile ? "bottom" : "left";
        myChart.update();
      }
    };

    typeof window !== "undefined" &&
      window.addEventListener("resize", handleResize);

    return () => {
      typeof window !== "undefined" &&
        window.removeEventListener("resize", handleResize);
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [labels, datasets, chartType, isMobile]);

  return <canvas ref={chartRef} />;
};

export default ChartList;

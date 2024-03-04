import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const MyChart = () => {
  useEffect(() => {
    // Chart data
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      }],
    };

    // Chart options
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    // Create chart
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data,
      options,
    });

    // Cleanup on component unmount
    return () => {
      myChart.destroy();
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div className="container mx-auto px-4 py-6 ">
      <canvas id="myChart"></canvas>
    </div>
  );
};

export default MyChart;

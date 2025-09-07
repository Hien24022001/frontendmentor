import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

function BarChart() {
  const data = {
    labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
    datasets: [
      {
        label: [1,2,3,4,5,6,7],
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
        backgroundColor: [
          'hsl(10, 79%, 65%)', 
          'hsl(10, 79%, 65%)', 
          'hsl(186, 34%, 65%)', 
          'hsl(10, 79%, 65%)', 
          'hsl(10, 79%, 65%)', 
          'hsl(10, 79%, 65%)', 
          'hsl(10, 79%, 65%)'
        ],
        hoverBackgroundColor: [
          'hsl(10, 100%, 79%)', 
          'hsl(10, 100%, 79%)',
          'hsl(186, 48%, 83%)',
          'hsl(10, 100%, 79%)',
          'hsl(10, 100%, 79%)',
          'hsl(10, 100%, 79%)',
          'hsl(10, 100%, 79%)'
        ],
        borderRadius: 3
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.parsed.y;
            return `$${value}`;
          },
          title: function(){
            return "";
          },
        },
        displayColors: false,
      }
    },
    scales: {
      x: {
        grid: {
          display: false, 
        },
      },
      y: {
        display: false,
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export default BarChart
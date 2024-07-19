import React from 'react';
import ReactApexChart from 'react-apexcharts';
import '../sass/Training.scss';

const TrainingDevelopmentChart = () => {
  const chartOptions = {
    series: [44, 55, 41, 17],
    options: {
      chart: {
        type: 'donut',
      },
      labels: ['Technical Skills', 'Soft Skills', 'Leadership', 'Compliance'],
      colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560'],
      legend: {
        position: 'bottom'
      },
      plotOptions: {
        pie: {
          donut: {
            size: '50%'
          }
        }
      }
    },
  };

  return (
    <div className="chart-container">
      <h2>Employee Training and Development</h2>
      <ReactApexChart 
        options={chartOptions.options} 
        series={chartOptions.series} 
        type="donut" 
        width="380"
      />
    </div>
  );
};

export default TrainingDevelopmentChart;
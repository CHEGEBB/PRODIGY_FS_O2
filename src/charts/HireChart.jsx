import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import styles from '../sass/DepartmentFacts.module.scss';

const DepartmentFacts = () => {
  const [timeFrame, setTimeFrame] = useState('weekly');

  const chartData = {
    employees: {
      weekly: [10, 41, 35, 51, 49, 62, 69],
      monthly: [30, 40, 45, 50, 49, 60, 70],
      yearly: [100, 120, 140, 160, 180, 200, 220]
    },
    profits: {
      weekly: [1000, 1200, 1100, 1400, 1300, 1500, 1600],
      monthly: [5000, 5500, 6000, 5800, 6200, 6500, 7000],
      yearly: [50000, 55000, 60000, 65000, 70000, 75000, 80000]
    },
    assets: {
      weekly: [5000, 5200, 5400, 5300, 5600, 5800, 6000],
      monthly: [20000, 22000, 24000, 23000, 25000, 27000, 29000],
      yearly: [200000, 220000, 240000, 260000, 280000, 300000, 320000]
    }
  };

  const createChartOptions = (title) => ({
    chart: {
      type: 'area',
      height: 300,
      zoom: { enabled: false }
    },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth' },
    title: { text: title, align: 'left' },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yaxis: { opposite: true },
    legend: { horizontalAlign: 'left' }
  });

  const renderChart = (data, title, color) => (
    <div className={styles.chartContainer}>
      <h1>{title}</h1>
      <h2>{data[data.length - 1]}</h2>
      <ReactApexChart
        options={{
          ...createChartOptions(title),
          colors: [color]
        }}
        series={[{ name: title, data: data }]}
        type="area"
        height={280}
      />
    </div>
  );

  return (
    <div className={styles.departmentFacts}>
      <nav className={styles.timeFrameNav}>
        <button onClick={() => setTimeFrame('weekly')} className={timeFrame === 'weekly' ? styles.active : ''}>Weekly</button>
        <button onClick={() => setTimeFrame('monthly')} className={timeFrame === 'monthly' ? styles.active : ''}>Monthly</button>
        <button onClick={() => setTimeFrame('yearly')} className={timeFrame === 'yearly' ? styles.active : ''}>Yearly</button>
      </nav>
      <div className={styles.chartsRow}>
        {renderChart(chartData.employees[timeFrame], 'Employees Hired', '#008FFB')}
        {renderChart(chartData.profits[timeFrame], 'Profits Earned', '#00E396')}
        {renderChart(chartData.assets[timeFrame], 'Assets', '#FEB019')}
      </div>
    </div>
  );
};

export default DepartmentFacts;
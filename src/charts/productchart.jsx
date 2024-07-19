import React from 'react';
import ApexCharts from 'react-apexcharts';
import styles from '../sass/ApexChart.module.scss';
import { useMediaQuery } from 'react-responsive';

const DashboardCharts = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280, maxWidth: 1920 });

  const sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];
  const colorPalette = ['#00D8B6', '#008FFB', '#FEB019', '#FF4560', '#775DD0'];

  const randomizeArray = (arr) => arr.sort(() => Math.random() - 0.5);

  const createSparklineOptions = (title, subtitle, color) => ({
    chart: {
      type: 'area',
      height: 100,
      sparkline: { enabled: true },
    },
    stroke: { curve: 'smooth' },
    fill: { opacity: 1 },
    series: [{ data: randomizeArray([...sparklineData]) }],
    labels: [...Array(24)].map((_, i) => `2024-07-0${i+1}`),
    yaxis: { min: 0 },
    xaxis: { type: 'datetime' },
    colors: [color],
    title: {
      text: title,
      offsetX: 0,
      style: { fontSize: '24px', fontWeight: 'bold' }
    },
    subtitle: {
      text: subtitle,
      offsetX: 0,
      style: { fontSize: '14px' }
    }
  });

  const spark1 = createSparklineOptions('$350,000', 'Sales', '#98FF98');
  const spark2 = createSparklineOptions('100,520', 'Customers', '#FF1493');
  const spark3 = createSparklineOptions('$200,000', 'Profits', '#008FFB');

  const monthlyEarningsOpt = {
    chart: {
      type: 'area',
      height: 200,
      sparkline: { enabled: true },
    },
    stroke: { curve: 'smooth' },
    fill: { opacity: 1 },
    series: [{ data: randomizeArray([...sparklineData]) }],
    yaxis: { min: 0, max: 130 },
    colors: ['#dce6ec'],
    title: {
      text: 'Total Earned',
      align: 'left',
      style: { fontSize: '18px', fontWeight: 'bold' }
    },
    subtitle: {
      text: '$150,000',
      align: 'left',
      style: { fontSize: '24px', fontWeight: 'bold' }
    }
  };

  const optionsBar = {
    chart: {
      type: 'bar',
      height: 200,
      stacked: true,
    },
    plotOptions: { bar: { horizontal: false } },
    colors: colorPalette,
    series: [
      { name: "Clothing", data: [42, 52, 16, 55, 59, 51, 45, 32, 26, 33, 44, 51] },
      { name: "Food Products", data: [6, 12, 4, 7, 5, 3, 6, 4, 3, 3, 5, 6] },
      { name: "Electronics", data: [8, 14, 9, 15, 16, 12, 8, 12, 9, 8, 9, 11] }
    ],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    title: {
      text: 'Monthly Sales',
      align: 'left',
      style: { fontSize: '18px', fontWeight: 'bold' }
    },
    legend: { position: 'top', horizontalAlign: 'left' }
  };

  const optionsArea = {
    chart: {
      type: 'area',
      height: 200,
      zoom: { enabled: false }
    },
    stroke: { curve: 'smooth' },
    colors: colorPalette,
    series: [
      {
        name: "Blog",
        data: [
          { x: 0, y: 0 }, { x: 4, y: 5 }, { x: 5, y: 3 }, { x: 9, y: 8 },
          { x: 14, y: 4 }, { x: 18, y: 5 }, { x: 25, y: 0 }
        ]
      },
      {
        name: "Social Media",
        data: [
          { x: 0, y: 0 }, { x: 4, y: 6 }, { x: 5, y: 4 }, { x: 14, y: 8 },
          { x: 18, y: 5.5 }, { x: 21, y: 6 }, { x: 25, y: 0 }
        ]
      },
      {
        name: "External",
        data: [
          { x: 0, y: 0 }, { x: 2, y: 5 }, { x: 5, y: 4 }, { x: 10, y: 11 },
          { x: 14, y: 4 }, { x: 18, y: 8 }, { x: 25, y: 0 }
        ]
      }
    ],
    fill: { opacity: 1 },
    title: {
      text: 'Daily Visits Insights',
      align: 'left',
      style: { fontSize: '18px', fontWeight: 'bold' }
    },
    xaxis: { type: 'numeric' },
    yaxis: { max: 15 },
    legend: { position: 'top', horizontalAlign: 'left' }
  };

  const getChartWidth = () => {
    if (isMobile) return '100%';
    if (isTablet) return '45%';
    if (isDesktop) return '30%';
    return '50%'; // default for larger screens
  };

  const getChartHeight = () => {
    if (isMobile) return 150;
    if (isTablet) return 180;
    if (isDesktop) return 200;
    return 220;
  };

  const getLargeChartWidth = () => {
    if (isMobile) return '100%';
    if (isTablet) return '100%';
    return '50%';
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.chartRow}>
        <div className={styles.chartCard} style={{ width: getChartWidth() }}>
          <ApexCharts options={spark1} series={spark1.series} type="area" height={getChartHeight()} />
        </div>
        <div className={styles.chartCard} style={{ width: getChartWidth() }}>
          <ApexCharts options={spark2} series={spark2.series} type="area" height={getChartHeight()} />
        </div>
        <div className={styles.chartCard} style={{ width: getChartWidth() }}>
          <ApexCharts options={spark3} series={spark3.series} type="area" height={getChartHeight()} />
        </div>
      </div>
      <div className={styles.chartRow}>
        <div className={styles.chartCard} style={{ width: getLargeChartWidth() }}>
          <ApexCharts options={monthlyEarningsOpt} series={monthlyEarningsOpt.series} type="area" height={getChartHeight()} />
        </div>
        <div className={styles.chartCard} style={{ width: getLargeChartWidth() }}>
          <ApexCharts options={optionsBar} series={optionsBar.series} type="bar" height={getChartHeight()} />
        </div>
      </div>
      <div className={styles.chartRow}>
        <div className={styles.chartCard} style={{ width: '100%' }}>
          <ApexCharts options={optionsArea} series={optionsArea.series} type="area" height={getChartHeight()} />
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;
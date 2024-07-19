import React from 'react';
import ReactApexChart from 'react-apexcharts';
import styles from "../sass/ApexChart.module.scss";

class PerformanceChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: 'John Smith',
          data: [80, 90, 70, 85, 95, 100, 90]
        },
        {
          name: 'Michael Brown',
          data: [70, 85, 75, 80, 90, 85, 75]
        },
        {
          name: 'Christina Piper',
          data: [60, 65, 70, 75, 80, 70, 65]
        },
        {
          name: 'Irene Johnson',
          data: [90, 95, 85, 80, 85, 95, 90]
        },
        {
          name: 'Keanu Reeves',
          data: [100, 100, 95, 90, 95, 100, 100]
        }
      ],
      options: {
        chart: {
          height: 300,
          type: 'line',
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        },
        colors: ['#77B6EA', '#545454', '#FFA500', '#008000', '#800080'],
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Employee Performance Over Time',
          align: 'left'
        },
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.5
          }
        },
        markers: {
          size: 1
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          title: {
            text: 'Month'
          }
        },
        yaxis: {
          title: {
            text: 'Performance Score'
          },
          min: 50,
          max: 110
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5
        }
      }
    };
  }

  render() {
    return (
      <div className={styles['chart-container']}>
        <div id="chart">
          <ReactApexChart 
            options={this.state.options} 
            series={this.state.series} 
            type="line" 
            height={350} 
            width="100%" 
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default PerformanceChart;
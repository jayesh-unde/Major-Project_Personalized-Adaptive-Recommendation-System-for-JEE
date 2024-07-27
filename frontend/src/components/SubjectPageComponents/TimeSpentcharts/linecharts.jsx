import React from 'react';
import Chart from 'react-apexcharts';

const linecharts = ({ subject }) => {
  const seriesData = {
    Physics: [{
      name: "Physics",
      data: [15, 34, 39, 23, 35, 40]
    }],
    Chemistry: [{
      name: "Chemistry",
      data: [10, 30, 19, 13, 25, 35]
    }],
    Mathematics: [{
      name: "Mathematics",
      data: [25, 24, 29, 23, 25, 20]
    }],
  };

  const chartSeries = seriesData[subject] || [];

  return (
    <React.Fragment>
      <div className='container-fluid mt-3 mb-3'>
        <Chart
          type='line'
          width={550}
          height={400}
          series={chartSeries}
          options={{
            title: { text: subject },
            xaxis: { title: { text: "Days" } },
            yaxis: { title: { text: "Questions" } },
            chart: {
              toolbar: { show: false },
              background: '#f4f4f4'
            },
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default linecharts;

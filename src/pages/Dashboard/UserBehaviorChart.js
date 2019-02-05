import React from 'react';
import Chart from 'react-chartist';

let data = {
  labels: [ 'Aug', 'Sep', 'Oct', 'Nov', 'Dec','Jan', 'Feb', 'Mar', 'Apr', 'Mai' ,'Jun', 'Jul',],
  series: [
    [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
    [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695],
    [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
    [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695],
  ]
};

let options = {
  seriesBarDistance: 10,
  axisX: {
    showGrid: false
  },
  height: "245px"
};

let responsiveOptions = [
  ['screen and (max-width: 640px)', {
    seriesBarDistance: 5,
    axisX: {
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  }]
];

const UserBehaviorChart = () => (
  <div className="card ">
    <div className="header">
      <h4 className="title">Placement stats</h4>
      <p className="category">branchwise</p>
    </div>
    <div className="content">
      <Chart data={data} options={options} responsiveOptions={responsiveOptions} type="Bar" className="ct-chart" />

    </div>
    <div className="footer">
      <div className="legend">
        <div className="item">
          <i className="fa fa-circle text-info"></i> Computer science
        </div>
        <div className="item">
          <i className="fa fa-circle text-danger"></i> Bio medical 
        </div>
        <div className="item">
          <i className="fa fa-circle text-danger"></i> Electrical
        </div>
        <div className="item">
          <i className="fa fa-circle text-danger"></i> Electronics
        </div>
      </div>
      <hr />
      <div className="stats">
        <i className="fa fa-check"></i> Data information certified
          </div>
    </div>
  </div>
);

export default UserBehaviorChart;
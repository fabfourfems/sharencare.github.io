// import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
// import Chart from 'chart.js'

// ReactChartkick.addAdapter(Chart)

// import React, { Component } from 'react';
// var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;


// class CategoryChart extends Component {
//     constructor(props){
//         super(props);
//     }

//     render() {
//         const options = {
//             title: {
//                 text: "Supply Tracker"
//             },
//             data: [
//                 {
//                     // Change type to "doughnut", "line", "splineArea", etc.
//                     type: "column",
//                     dataPoints: [
//                         { label: "Produce", y: 10 },
//                         { label: "Canned Food", y: 15 },
//                         { label: "Pantry Goods", y: 25 }
//                     ]
//                 }
//             ]
//         }
//         return (
//             <div>
//                 <CanvasJSChart options={options}
//                 /* onRef={ref => this.chart = ref} */
//                 />
//                 {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
//             </div>
//         );
//     }
// }

// export default CategoryChart;      
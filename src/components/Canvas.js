/* App.js */
import React, { Component } from "react";
import { CanvasJSChart } from "canvasjs-react-charts";
import axios from "axios";
var dataPoints = [];
class Canvas extends Component {
  render() {
    const options = {
      theme: "light2",
      title: {
        text: "Consomations Chart",
      },
      axisY: {
        title: "Consomation en KWH",
        prefix: "KWH",
      },
      axisX: {
        title: "Les mois",
        valueFormatString: "MMM",
      },
      data: [
        {
          type: "line",

          dataPoints: dataPoints,
        },
      ],
    };
    return (
      <div>
        <CanvasJSChart options={options} onRef={(ref) => (this.chart = ref)} />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }

  async componentDidMount() {
    const authAxios = axios.create({
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    });
    var chart = this.chart;
    const { data } = await authAxios.get(
      "http://127.0.0.1:8000/api/client/conso"
    );

    for (let i = 0; i < data.data.length; i++) {
      dataPoints.push({
        x: new Date(2021, i),
        y: parseInt(data.data[i].consomation),
      });
    }
    console.log(dataPoints);
    chart.render();
  }
}

export default Canvas;

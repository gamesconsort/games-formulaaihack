import 'chart.js/auto';
import React, {useContext, useEffect, useState} from 'react';
import {Bar, Pie} from 'react-chartjs-2';
import DataContext from "./DataContext";

// Chart.register(ArcElement);

export default function Visual() {

  const gen = useContext(DataContext);
  const [weatherData, setWeatherData] = useState([])

  useEffect(() => {
    setWeatherData(Object.entries(gen.data).map(i=>parseFloat(i[1]['rain_percentage'])))
  }, [gen.data]);

  const pieState = {
    labels: ['Light Cloud', 'Overcast', 'Light Rain',
             'Heavy Rain', 'Storm'],
    datasets: [
      {
        label: 'Weather',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          '#6800B4'
        ],
        hoverBackgroundColor: [
          '#501800',
          '#4B5000',
          '#175000',
          '#003350',
          '#35014F'
        ],
        data: weatherData
      }
    ]
  }

  const barState = {
    labels: ['5 mins', '10 mins', '15 mins',
             '30 mins', '60 mins'],
    datasets: [
      {
        label: 'Weather Prediction per Time',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: weatherData
      }
    ]
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <h3 className="display-6 text-center">Prediction Visualization</h3> <br />
      </div>
      <div className="col-md-12 pb-5" style={{}}>
        <Pie
          data={pieState}
          options={{
            title:{
              display:true,
              text:'Weather Prediction Probability',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
      <div className="col-md-12">
        <Bar
          data={barState}
          options={{
            title:{
              display:true,
              text:'Weather Prediction per Time',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    </div>
  )
}
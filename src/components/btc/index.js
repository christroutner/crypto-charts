/*
  Plot the BTC price data.
*/

// Global npm libraries
// import { useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

import priceData from './btc-price-data.json'
console.log('priceData: ', priceData)

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

function BTCPrice (props) {
  // const [chartData, setChartData] = useState({
  //   labels: Data.map((data) => data.year),
  //   datasets: [
  //     {
  //       label: 'Users Gained ',
  //       data: Data.map((data) => data.userGain),
  //       backgroundColor: [
  //         'rgba(75,192,192,1)',
  //         '#ecf0f1',
  //         '#50AF95',
  //         '#f3ba2f',
  //         '#2a71d0'
  //       ],
  //       borderColor: 'black',
  //       borderWidth: 2
  //     }
  //   ]
  // })

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart'
      }
    }
  }

  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
  const labels = priceData.map(x => x.date)

  const data = {
    labels,
    datasets: [
      {
        label: 'BTC',
        data: priceData.map(x => parseFloat(x.close)),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }
      // {
      //   label: 'Dataset 2',
      //   data: [7, 6, 5, 4, 3, 2, 1],
      //   borderColor: 'rgb(53, 162, 235)',
      //   backgroundColor: 'rgba(53, 162, 235, 0.5)'
      // }
    ]
  }

  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Line Chart</h2>
      <Line options={options} data={data} />
    </>
  )
}

// const Data = [
//   {
//     id: 1,
//     year: 2016,
//     userGain: 80000,
//     userLost: 823
//   },
//   {
//     id: 2,
//     year: 2017,
//     userGain: 45677,
//     userLost: 345
//   },
//   {
//     id: 3,
//     year: 2018,
//     userGain: 78888,
//     userLost: 555
//   },
//   {
//     id: 4,
//     year: 2019,
//     userGain: 90000,
//     userLost: 4555
//   },
//   {
//     id: 5,
//     year: 2020,
//     userGain: 4300,
//     userLost: 234
//   }
// ]

export default BTCPrice

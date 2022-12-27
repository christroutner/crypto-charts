/*
  Plot the BTC price data.
*/

// Global npm libraries
import { useEffect } from 'react'
// import { Line } from 'react-chartjs-2'
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   LogarithmicScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// } from 'chart.js'

import { Chart } from 'chart.js/auto'

import priceData from './btc-price-data.json'
// console.log('priceData: ', priceData)

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   LogarithmicScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// )

function BTCPrice2 (props) {

  useEffect(() => {
    console.log('hello world')

    const labels = priceData.map(x => x.date)
    const data = priceData.map(x => parseFloat(x.close))


    const ctx = document.getElementById('btc2');

    // new Chart(ctx, {
    //   type: 'bar',
    //   data: {
    //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //     datasets: [{
    //       label: '# of Votes',
    //       data: [12, 19, 3, 5, 2, 3],
    //       borderWidth: 1
    //     }]
    //   },
    //   options: {
    //     scales: {
    //       y: {
    //         beginAtZero: true
    //       }
    //     }
    //   }
    // });

    new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: 'BTC Price',
          data,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          x: {
            display: true
          },
          y: {
            display: true,
            type: 'logarithmic'
          }
        }
      }
    });

  })

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart'
      },
      scales: {
        x: {
          display: true
        },
        y: {
          display: true,
          type: 'logarithmic'
        }
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

  // return (
  //   <>
  //     <h2 style={{ textAlign: 'center' }}>Line Chart</h2>
  //     <Line options={options} data={data} />
  //   </>
  // )

  return (
    <>
      <canvas id="btc2"></canvas>
    </>
  )
}


export default BTCPrice2

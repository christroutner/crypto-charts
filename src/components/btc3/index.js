/*
  Plot the BTC price data.
*/

// Global npm libraries
import { useEffect } from 'react'
import { Chart } from 'chart.js/auto'

// import priceData from './btc-price-data.json'
import priceData from './hybrid-data.json'


function BTCPrice3 (props) {

  useEffect(() => {
    // Generate date strings.
    const labels = priceData.map(x => {
      const date = new Date(x.date)
      const dateStr = `${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`
      // return date.toLocaleString()
      return dateStr
    })
    const data = priceData.map(x => parseFloat(x.close))
    console.log('data: ', data)

    // Transform price data with a log
    const logData = data.map(x => Math.log10(x))
    console.log('logData: ', logData)

    const ctx = document.getElementById('btc3');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'BTC Price',
            data: logData,
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          x: {
            display: true
          },
          y: {
            display: true,
            // type: 'logarithmic'
          }
        }
      }
    });
  })


  return (
    <>
      <canvas id="btc3"></canvas>
    </>
  )
}


export default BTCPrice3

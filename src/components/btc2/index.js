/*
  Plot the BTC price data.
*/

// Global npm libraries
import { useEffect } from 'react'

import { Chart } from 'chart.js/auto'

// import priceData from './btc-price-data.json'
import priceData from './hybrid-data.json'


function BTCPrice2 (props) {

  useEffect(() => {
    console.log('hello world')

    const labels = priceData.map(x => {
      const date = new Date(x.date)
      const dateStr = `${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`
      // return date.toLocaleString()
      return dateStr
    })
    const data = priceData.map(x => parseFloat(x.close))


    const ctx = document.getElementById('btc2');

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


  return (
    <>
      <canvas id="btc2"></canvas>
    </>
  )
}


export default BTCPrice2

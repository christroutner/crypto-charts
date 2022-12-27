/*
  Plot the BTC price data.
*/

// Global npm libraries
import { useEffect } from 'react'
import { Chart } from 'chart.js/auto'
import regression from 'regression'

// import priceData from './btc-price-data.json'
// import priceData from './hybrid-data.json'
import priceData from './btc-price-2010-2022.json'


function BTCPrice3 (props) {

  useEffect(() => {
    // Generate date strings.
    const labels = priceData.map(x => {
      const date = new Date(x.date)
      const dateStr = `${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`
      // return date.toLocaleString()
      return dateStr
    })
    // const data = priceData.map(x => parseFloat(x.close))
    const data = priceData.map(x => parseFloat(x.price))
    // console.log('data: ', data)

    // Transform price data with a log
    const logData = data.map(x => Math.log10(x))
    // console.log('logData: ', logData)

    // Create input array for regression
    const regIn = []
    for(let i=0; i < logData.length; i++) {
      let date = priceData[i].date
      date = new Date(date)
      date = date.getTime()

      const point = [date, logData[i]]
      regIn.push(point)
    }

    // Calculate a logarithmic regression.
    const regData = regression.logarithmic(regIn)
    console.log('regData: ', regData)

    // Pull out the regression data
    const regData2 = regData.points.map(x => x[1])

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
          },
          {
            label: 'Log Regression',
            data: regData2,
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

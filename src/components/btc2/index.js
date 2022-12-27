/*
  Plot the BTC price data.
*/

// Global npm libraries
import { useEffect } from 'react'
import { Chart } from 'chart.js/auto'
import boll from 'bollinger-bands'

// import priceData from './btc-price-data.json'
// import priceData from './hybrid-data.json'
import priceData from './btc-price-2010-2022.json'


function BTCPrice2 (props) {

  useEffect(() => {
    console.log('hello world')

    // Generate date strings.
    const labels = priceData.map(x => {
      const date = new Date(x.date)
      const dateStr = `${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`
      // return date.toLocaleString()
      return dateStr
    })
    // const data = priceData.map(x => parseFloat(x.close))
    const data = priceData.map(x => parseFloat(x.price))

    // Generate bollinger bands
    const bollOut = boll(data, 200, 2)
    // console.log('bollOut.lower: ', bollOut.lower)

    // Generate the underside band.
    // Note: This generates the same values as bollOut.lower. I'm not sure
    // what is causing the negative values.
    const bollLower = []
    for(let i=0; i < bollOut.mid.length; i++) {
      let result = bollOut.upper[i] - bollOut.mid[i]
      result = bollOut.mid[i] - result
      bollLower.push(result)
    }
    // let bollLower = bollOut.upper - bollOut.mid
    // bollLower = bollOut.mid - bollLower


    const ctx = document.getElementById('btc2');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'BTC Price',
            data,
            borderWidth: 1
          },
          {
            label: '200 day MA',
            data: bollOut.mid,
            borderWidth: 1
          },
          {
            label: '-2 std dev',
            // data: bollOut.lower,
            data: bollLower,
            borderWidth: 1
          },
          {
            label: '+2 std dev',
            data: bollOut.upper,
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

/*
  This script extracts data from the CSV file, and generates a JSON file. It
  uses the Close price of BTC, an converts the dates into JavaScript date
  numbers.
*/

const csv = require('csvtojson')
const fs = require('fs')

async function start() {
  try {
    // Read in the CSV file
    // const csvFilePath='./BTC-USD.csv'
    const csvFilePath='./btc-price-2009-2022.csv'

    const jsonObj = await csv().fromFile(csvFilePath)
    // console.log('jsonObj: ', jsonObj)

    const data = []

    for(let i=0; i < jsonObj.length; i++) {
    // for(let i=0; i < 10; i++) {
      const entry = jsonObj[i]

      let date = new Date(entry.Date)
      date = date.getTime()
      const price = Number(entry.Price)

      data.push({date, price})
    }
    console.log('data: ', data)

    fs.writeFileSync('./btc-price-2010-2022.json', JSON.stringify(data, null, 2))
  } catch(err) {
    console.error(err)
  }
}
start()

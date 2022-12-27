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
    const csvFilePath='./hybrid.csv'

    const jsonObj = await csv().fromFile(csvFilePath)
    // console.log('jsonObj: ', jsonObj)

    const data = []

    for(let i=0; i < jsonObj.length; i++) {
      const entry = jsonObj[i]

      let date = new Date(entry.Date)
      date = date.getTime()
      const close = Math.floor(parseFloat(entry.Close))
      const volume = Math.floor(parseFloat(entry.Volume))

      data.push({date, close, volume})
    }
    console.log('data: ', data)

    fs.writeFileSync('./hybrid-data.json', JSON.stringify(data, null, 2))
  } catch(err) {
    console.error(err)
  }
}
start()

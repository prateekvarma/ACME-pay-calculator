const fs = require('fs')
const calculateAmount = require('./functions')

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file: ', err)
    return
  }
  var arr = data.toString().split('\n')

  arr.forEach((entry) => {
    let name = entry.split('=')[0]
    let hoursLog = entry.split('=')[1]

    let toBePaid = calculateAmount(hoursLog)
    console.log(`The amount to pay ${name} is: ${toBePaid} USD`)
  })
})
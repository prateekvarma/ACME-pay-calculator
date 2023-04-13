let morningRate;
let eveningRate;
let nightRate;

function checkWeekdayOrWeekend(day) {
    if (['MO', 'TU', 'WE', 'TH', 'FR'].includes(day)) {
        morningRate = 25;
        eveningRate = 15;
        nightRate = 20;
      } else if (['SA', 'SU'].includes(day)) {
        morningRate = 30;
        eveningRate = 20;
        nightRate = 25;
      }
}

function calculateAmount(hoursLog) {
  let toBePaid = 0;

  for (let dailyWork of hoursLog.split(',')) {
    let day = dailyWork.substring(0, 2);
    let hours = dailyWork.substring(2);
    let startingHour = parseInt(hours.substring(0, 2));
    let endingHour = parseInt(hours.substring(6, 8));

    let morningHours = 0;
    let eveningHours = 0;
    let nightHours = 0;

    //checks if it's a weekday or a weekend
    checkWeekdayOrWeekend(day)

    if (startingHour >= 0 && startingHour <= 9) {
      //starting hours between midnight to 9
      if (endingHour <= 9) {
        //ending hour under 9:00
        morningHours += endingHour - startingHour;
        toBePaid += morningHours * morningRate;
      } else if (endingHour >= 10 && endingHour <= 18) {
        //ending hour between 10:00 and 18:00
        morningHours += 9 - startingHour;
        eveningHours += endingHour - 9;
        toBePaid += morningHours * morningRate + eveningHours * eveningRate;
      } else if (endingHour >= 19 && (endingHour <= 23 || endingHour === 0)) {
        //ending hour between 19:00 to midnight
        if (endingHour === 0) {
          endingHour = 24;
        }
        morningHours += 9 - startingHour;
        eveningHours += 9;
        nightHours += endingHour - 18;
        toBePaid +=
          morningHours * morningRate +
          eveningHours * eveningRate +
          nightHours * nightRate;
      }
    } else if (startingHour >= 10 && startingHour <= 18) {
      //starting hour between 10:00 to 18:00
      if (endingHour <= 18) {
        //ending hour under 18:00
        eveningHours += endingHour - startingHour;
        toBePaid += eveningHours * eveningRate;
      } else if (endingHour >= 19 && (endingHour <= 23 || endingHour === 0)) {
        //ending hour under between 19:00 and midnight
        if (endingHour === 0) {
          endingHour = 24;
        }
        eveningHours += 18 - startingHour;
        nightHours += endingHour - 18;
        toBePaid += eveningHours * eveningRate + nightHours * nightRate;
      }
    } else if (startingHour >= 19 && (endingHour <= 23 || endingHour === 0)) {
      //starting hour between 19:00 to mightnight
      if (endingHour === 0) {
        endingHour = 24;
      }
      nightHours += endingHour - startingHour;
      toBePaid += nightHours * nightRate;
    }
  }
  return toBePaid;
}

module.exports = calculateAmount;

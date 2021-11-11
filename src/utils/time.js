// import moment from 'moment'

// export function editTime() {
//    const dateNow = new Date().toUTCString()
//    const timeNow = new Date().toLocaleTimeString()

//    console.log(dateNow, timeNow)

//    let dateStr = dateNow,
//       timeStr = timeNow,
//       date = moment(dateStr),
//       time = moment(timeStr, 'HH:mm');

//    date.set({
//       hour: time.get('hour'),
//       minute: time.get('minute'),
//       second: time.get('second')
//    });

//    console.log();
// }

export function editTime2(num) {
   let currentTime = new Date().toTimeString()
   const hoursNow = Number(currentTime.substr(0, 2))
   let time

   // Check Symbol
   const symbol = num.substr(0, 1)
   const editNum = Number(num.substr(1))

   if (symbol === '-') {
      time = hoursNow - editNum
   } else {
      time = hoursNow + editNum
   }

   currentTime = new Date()
   currentTime.setHours(time)
   console.log(currentTime);
   return currentTime
}
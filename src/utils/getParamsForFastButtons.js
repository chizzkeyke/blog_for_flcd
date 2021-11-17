export function getParamsForFastButtons(numbers, name) {
   let arr = []
   let num = 0

   if (name === 'rate') {
      for (let i = 0; i < numbers; i++) {
         num = num +  2
         arr.push({
            id: i,
            num: num,
            str: num + ' %'
         })
      }
      return arr
   } else if (name === 'firstPayment') {

   }  
   else if (name === 'years') {
      for (let i = 0; i < numbers; i++) {

         num = num + 5
         arr.push({
            id: i,
            num: num,
            str: num + ' лет'
         })
      }
      return arr
   }



}
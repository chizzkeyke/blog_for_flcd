export function getDataForChartsOnCredit(credit, everyMouthPayment, rate, year) {
   let data = []
   let remainingDebt = credit
   const parcent = (rate / 12) * 0.01
   const mouths = year * 12

   for (let i = mouths; i >= 0; i--) {
      let currentPayment = everyMouthPayment - remainingDebt * parcent
      data.push({
         name: i,
         parcent: Math.round(remainingDebt * parcent),
         mainDebt: Math.round(currentPayment),
      })
      remainingDebt -= currentPayment
   }

   return data
}


export function getDataForChartsOnPayments(everyMouthPayment, year, startPayment) {
   let data = []
   const mouths = year * 12
   let payment = startPayment

   for (let i = mouths; i >= 0; i--) {
      data.push({
         name: i,
         payment
      })

      payment += everyMouthPayment
   }

   return data
}

export function getDataOnEveryMouthPayment(everyMouthPayment, year) {
   let mouths = year * 12
   let data = []

   for (let i = mouths; i >= 0; i--) {
      data.push({
         name: i,
         everyMouthPayment
      })
   }

   return data
}

export function dataForCharts(credit, everyMouthPayment, rate, years, startPayment) {
   let mouths = years * 12
   let data = []

   for (let i = mouths; i >= 0; i--) {
      data.push({
         name: i,
         mainDebt: getDataForChartsOnCredit(credit, everyMouthPayment, rate, years)[i].mainDebt,
         parcents: getDataForChartsOnCredit(credit, everyMouthPayment, rate, years)[i].parcent,
         payments: getDataForChartsOnPayments(everyMouthPayment, years, startPayment)[i].payment,
         everyMouthPayment: getDataOnEveryMouthPayment(everyMouthPayment, years)[i].everyMouthPayment
      })
   }
   return data.reverse()
}

export const getPercentages = (credit, payment, rate, duration) => {
   let rateInMonth = (rate / 12) * 0.01
   let period = duration * 12
   let percentages = 0
   let remainingDebt = credit

   for (let i = 0; i < period; i += 1) {
      let percentPart = remainingDebt * rateInMonth
      remainingDebt -= payment - percentPart
      percentages += percentPart
   }
   return Number(percentages.toFixed())
};

export const getMonthlyPayment = (sum, period, rate) => {
   let i = (rate / 12) * 0.01;

   let result =
      (sum * (i * Math.pow(1 + i, period * 12))) /
      (Math.pow(1 + i, period * 12) - 1);

   return result.toFixed();
};

export const getPayment = (mouthPayment, period, rate) => {
   let i = (rate / 12) * 0.01

   let result =
      mouthPayment * ((Math.pow(1 + i, period * 12) - 1)) /
      (i * Math.pow(1 + i, period * 12))

   return Number(result.toFixed())
}



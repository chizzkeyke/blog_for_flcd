export function getNumberFromString(str) {
   const reg = /\d+/g
   const result = str.match(reg)
   return Number(result[0])
}
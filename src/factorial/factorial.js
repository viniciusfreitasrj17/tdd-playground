import { typeErrorMessage, rangeErrorMessage } from './utils'

// Recursividade - Função Functional
const getFactorial = number => {
  const isNotNumber = typeof number !== 'number'
  const isNumberOutOfRange = number < 0 || number > 20
  const isNumberOnOrZero = number === 1 || number === 0

  if (isNotNumber)
    throw new TypeError(typeErrorMessage)
    
  if (isNumberOutOfRange) 
    throw new RangeError(rangeErrorMessage)

  
  return isNumberOnOrZero ? 1 : number * getFactorial(number - 1)
}

export default getFactorial

// Iteração - Função Imperativa
// const getFactorial = number => {
  
  // let factorial = 1

  // for (let i = number; i >= 1; i--) {
  //   factorial *= i
  // }

  // return factorial
// }

// export default getFactorial
import { typeErrorMessage, rangeErrorMessage } from './utils'
import getFactorial from './factorial'

describe('Happy Path', () => {

  it('getFactorial should be a function', () => {
    expect(getFactorial).toBeInstanceOf(Function)
  })
  
  it('getFactorial(3) should return 6', () => {
    const actual = getFactorial(3)
    const expected = 6
    
    expect(actual).toBe(expected)
  })
  
  it('getFactorial(4) should return 24', () => {
    const actual = getFactorial(4)
    const expected = 24
    
    expect(actual).toBe(expected)
  })

})

describe('Unhappy Path', () => {
  it('getFactorial() should throw a TypeError', () => {
    try {
      getFactorial()
    } catch ({ name }) {
      expect(name).toBe('TypeError')
    }
  })

  it(`getFactorial() should throw a TypeError with message "${typeErrorMessage}"`, () => {
    try {
      getFactorial()
    } catch ({ message }) {
      expect(message).toBe(typeErrorMessage)
    }
  })

  it('getFactorial(0) should return 1', () => {
    const actual = getFactorial(0)
    const expected = 1

    expect(actual).toBe(expected)
  })

  it('getFactorial(-1) should throw a RangeError', () => {
    try {
      getFactorial(-1)
    } catch ({ name }) {
      expect(name).toBe('RangeError')
    }
  })

  it(`getFactorial(-1) should throw a RangeError with message "${rangeErrorMessage}"`, () => {
    try {
      getFactorial(-1)
    } catch ({ message }) {
      expect(message).toBe(rangeErrorMessage)
    }
  })
})
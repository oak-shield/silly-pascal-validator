import { SillyPascalValidator } from './silly-pacal-validator'

// I added duplicated tests, because "Systemic functional testing" recommend that approach.

// eslint-disable-next-line @typescript-eslint/no-empty-function
describe('silly pascal identifier validator', () => {
  let sillyPascalValidator: SillyPascalValidator

  beforeEach(() => { sillyPascalValidator = new SillyPascalValidator() })

  test('should return false if identifier is null', () => {
    const isValidIdentifier = sillyPascalValidator.isValid(null)
    expect(isValidIdentifier).toBeFalsy()
  })

  test('should return false if identifier is empty string', () => {
    const isValidIdentifier = sillyPascalValidator.isValid('')
    expect(isValidIdentifier).toBeFalsy()
  })

  test('should return false if length identifier is greater than 6', () => {
    const isValidIdentifier = sillyPascalValidator.isValid('igor567')
    expect(isValidIdentifier).toBeFalsy()
  })

  test('should return false if length identifier is greater than 6', () => {
    const isValidIdentifier = sillyPascalValidator.isValid('igorigor')
    expect(isValidIdentifier).toBeFalsy()
  })

  test('should return false if identifier hasn"t only letter and digits', () => {
    const isValidIdentifier = sillyPascalValidator.isValid('ig^or1')
    expect(isValidIdentifier).toBeFalsy()
  })

  test('should return false if identifier hasn"t only letter and digits', () => {
    const isValidIdentifier = sillyPascalValidator.isValid('igor*1')
    expect(isValidIdentifier).toBeFalsy()
  })

  test('should return false if identifier don"t starts with a letter', () => {
    const isValidIdentifier = sillyPascalValidator.isValid('1gor')
    expect(isValidIdentifier).toBeFalsy()
  })

  test('should return false if identifier don"t starts with a letter', () => {
    const isValidIdentifier = sillyPascalValidator.isValid('2or')
    expect(isValidIdentifier).toBeFalsy()
  })

  test('should return true if identifier starts with a letter', () => {
    const isValidIdentifier = sillyPascalValidator.isValid('igor1')
    expect(isValidIdentifier).toBeTruthy()
  })

  test('should return true if identifier has one letter', () => {
    const isValidIdentifier = sillyPascalValidator.isValid('i')
    expect(isValidIdentifier).toBeTruthy()
  })

  test('should return true if length identifier has six valid characters', () => {
    const isValidIdentifier = sillyPascalValidator.isValid('igor56')
    expect(isValidIdentifier).toBeTruthy()
  })
})

export class SillyPascalValidator {
    private itsDigit = /^[0-9]+$/
    private itsOnlyLetterOrDigit = /^[0-9a-zA-Z]+$/

    public isValid (identifier: string): boolean {
      if (identifier === null) { return false }

      if (identifier.length === 0 || identifier.length > 6) { return false }

      if (this.itsDigit.test(identifier.charAt(0)) ||
      !this.itsOnlyLetterOrDigit.test(identifier)) {
        return false
      }

      return true
    }
}

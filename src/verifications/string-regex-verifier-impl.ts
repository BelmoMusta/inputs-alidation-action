import { StringValidationType, ValidationReportItem } from '../types'
import { StringAbstractVerifier } from './string-abstract-verifier'

export class StringRegexVerifierImpl extends StringAbstractVerifier {
  verify(
    validationType: StringValidationType,
    value: any,
    validationReport: ValidationReportItem[]
  ): boolean {
    if (validationType.regex) {
      const regExp = new RegExp(validationType.regex)
      if (!regExp.test(value)) {
        validationReport.push({
          message: `has to match the regex '${validationType.regex}'`,
          found: value
        })
      }
      return false
    }
    return true
  }
}
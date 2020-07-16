const ans = require('./ans.js')
const assert = require('assert')

it('check if both array are non ampty', () => {
  assert.equal(ans.validateArrayLength(0, 0), false)
})
it('check if quarterly data array is non ampty', () => {
  assert.equal(ans.validateArrayLength(1, 0), false)
})

it('check if customer data array is non ampty', () => {
  assert.equal(ans.validateArrayLength(0, 1), false)
})
it('Successfully run if array is non empty', () => {
  assert.equal(ans.validateArrayLength(1, 1), true)
})
it('check if account number is not empty', () => {
  assert.equal(ans.validateAccountNumber(''), true)
})
it('check if account number is number', () => {
  assert.equal(ans.validateAccountNumber('123'), true)
})
it('sucssfully run if account number is valide', () => {
  assert.equal(ans.validateAccountNumber(123456789), true)
})
it('check if mobile number is not empty', () => {
  assert.equal(ans.validatePhoneNumber(''), true)
})
it('check if mobile number is number', () => {
  assert.equal(ans.validatePhoneNumber('8201475689'), true)
})
it('sucssfully run if phone number is valide', () => {
  assert.equal(ans.validatePhoneNumber(8201475689), true)
})
import SelectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('it should return the total for all expenses', () => {
  const total = SelectExpensesTotal(expenses);
  expect(total).toBe(17000)
})

test('it should return 0 for an empty array of expenses', () => {
  const total = SelectExpensesTotal([])
  expect(total).toBe(0)
})

test('it should correctly total a single expense', () => {
  const total = SelectExpensesTotal([expenses[1]])
  expect(total).toBe(9000)
})

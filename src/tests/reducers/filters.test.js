import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('it should setup default filter values', () => {
  const state = filtersReducer(undefined, {type: '@@INIT'})
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
    focusedInput: true
  })
})

test('it should sort by amount', () => {
  const state = filtersReducer(undefined, {type: "SORT_BY_AMOUNT"})
  expect(state.sortBy).toBe('amount')
})

test('it should sort by date', () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
    focusedInput: true
  }
  const state = filtersReducer(currentState, {type: "SORT_BY_DATE"})
  expect(state.sortBy).toBe('date')
})

test('is should sort by text input', () => {
  const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', search: "water"})
  expect(state.text).toBe('water')
})

test('it should set the start date', () => {
  const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: 5})
  expect(state.startDate).toBe(5)
})

test('it should set the end date', () => {
  const state = filtersReducer(undefined, {type: "SET_END_DATE", endDate: 9})
  expect(state.endDate).toBe(9)
})

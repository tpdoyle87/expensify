import {setTextFilter,
        sortByDate,
        sortByAmount,
        setStartDate,
        setEndDate
} from '../../actions/filters'

import moment from 'moment'
// default tests
test("it should set text filter with default values", () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    search: ''
  })
})

test("it should set start date to undefined by default", () => {
  const action = setStartDate()
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: undefined
  })
})

test("it should set end date to undefined by default", () => {
  const action = setEndDate()
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: undefined
  })
})

// with values tests

test("it should set text filter with values passed in", () => {
  const action = setTextFilter("rent");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    search: 'rent'
  })
})

test("it should set the sort by date", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE"
  })
})

test("it should set the sort by amount", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT"
  })
})

test("it should set the start date", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  })
})

test("it should set the end date", () => {
  const action = setEndDate(moment(1));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(1)
  })
})

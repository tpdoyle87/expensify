import { addExpense, editExpense, removeExpense } from '../../actions/expenses'
import { Action } from 'rxjs/internal/scheduler/Action';

test("it should setup remove expense action object", () => {
  const action = removeExpense({ id: '123abc'})
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  })
})

test("it should setup update action object", () => {
  const action = editExpense("123kn", { description: "hi"})
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123kn",
    updates: {
      description: "hi"
    }
  })
})

test("It should setup create action object", () => {
  const action = addExpense({description: "hi", amount: 5});
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expenses: {
    description: "hi",
    amount: 5,
    note: '',
    createdAt: 0,
    id: expect.any(String)
    }
  })
})

test("it should create expense with default values", () => {
  const action = addExpense()
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expenses: {
      amount: 0,
      createdAt: 0,
      description: '',
      id: expect.any(String),
      note: ''
    }
  })
})

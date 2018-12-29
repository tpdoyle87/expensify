import expensesReducer from '../../reducers/expenses'

const expenses = [{
  id: 1,
  description: "water",
  amount: 3000,
  note: '',
  createdAt: 1
},{
  id: 2,
  description: "rent",
  amount: 9000,
  note: 'bye',
  createdAt: 2
},{
  id: 3,
  description: "gas",
  amount: 5000,
  note: 'hi',
  createdAt: 3
}]

test("it should set the default state", () => {
  const state = expensesReducer(undefined, {type: '@@INIT'})
  expect(state).toEqual([])
})

test('it should add an expense', () => {
  const expense = {
    id: 1,
    description: "water",
    amount: 3000,
    note: "",
    createdAt: 5
  }
  const state = expensesReducer(undefined, {type: 'ADD_EXPENSE', expenses: expense})
  expect(state).toEqual([expense])
})

test('it should remove an expense', () => {
  const state = expensesReducer(expenses, {type: 'REMOVE_EXPENSE', id: 2})
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('it should edit an expense', () => {
  const updates = {
    description: 'agua'
  }
  const state = expensesReducer(expenses, {type: 'EDIT_EXPENSE', id: 1, updates: updates})
  expect(state).toEqual([{
    id: 1,
    description: "agua",
    amount: 3000,
    note: '',
    createdAt: 1
  }, {
      id: 2,
      description: "rent",
      amount: 9000,
      note: 'bye',
      createdAt: 2
    }, {
      id: 3,
      description: "gas",
      amount: 5000,
      note: 'hi',
      createdAt: 3
    }])
})

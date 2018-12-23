// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'normalize.css/normalize.css'
// import './styles/styles.scss';

// import AppRouter from "./routers/AppRouter"

// ReactDOM.render(<AppRouter />, document.getElementById('root'));

import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Add_expense
const addExpense = (
  {
    description = "",
    note = "",
    amount = 0,
    createdAt = 0
  } = {}
    ) => ({
  type: "ADD_EXPENSE",
  expenses: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})
// Remove_expense
const removeExpense = (
  {
    id
  } = {}
  ) => ({
  type: "REMOVE_EXPENSE",
  id: id
})
// Edit_expense
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
})
// Set_text_filter
const setTextFilter = (search = '') => ({
  type: "SET_TEXT_FILTER",
  search
})
// Sort by date
const sortByDate = () => ({
  type: "SORT_BY_DATE",
})
// Sort by amount
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
})
// Set start date
const setStartDate = (startDate = undefined) => ({
  type: "SET_START_DATE",
  startDate
})
// Set end date
const setEndDate = (endDate = undefined) => ({
  type: "SET_END_DATE",
  endDate
})
// Expenses Reducer
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expenses]
    case "REMOVE_EXPENSE":
      return state.filter(({id}) => id !== action.id)
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense
        }
      })
    default:
      return state;
  }
}

// filters Reducer
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
          ...state,
          text: action.search
        }
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      }
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount"
      }
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      }
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state;
  }
}

// Get Visible expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === "date") {
      return a.createdAt < b.createdAt ? 1 : -1
    } else if (sortBy === "amount") {
      return a.amount < b.amount ? 1 : -1
    }
  })
}

// store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
)

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses)
})

const expenseThree = store.dispatch(addExpense({ description: "renT", amount: 800, createdAt: 500 }))
const expenseTwo = store.dispatch(addExpense({ description: "renT", amount: 300, createdAt: -1000 }))
const expenseOne = store.dispatch(addExpense({ description: "Rent", amount: 100, createdAt: 1000}))
const expenseFour = store.dispatch(addExpense({ description: "Coffee", amount: 800, createdAt: 500 }))
// store.dispatch(removeExpense({ id: expenseTwo.expenses.id}))
// store.dispatch(editExpense(expenseOne.expenses.id, { amount: 500 }))
store.dispatch(setTextFilter("re"));
// store.dispatch(sortByDate());
store.dispatch(sortByAmount());
// store.dispatch(setStartDate(0))
// store.dispatch(setEndDate(1000))

const demoState = {
  expenses: [{
    id: "asdfilsaodfbn",
    description: "January Rent",
    note: "This was the final payment for that address",
    amount: "100000",
    createdAt: 0
  }],
  filters: {
    text: "rent",
    sortBy: "amount", // date or amount
    startDate: undefined,
    endDate: undefined
  }
}

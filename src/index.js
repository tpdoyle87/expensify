// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'normalize.css/normalize.css'
// import './styles/styles.scss';

// import AppRouter from "./routers/AppRouter"

// ReactDOM.render(<AppRouter />, document.getElementById('root'));

import { createStore, combineReducers } from 'redux'

// Add_expense
// Remove_expense
// Edit_expense

// Set_text_filter
// Sort by date
// Sort by amount
// Set start date
// Set end date

// Expenses Reducer
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
}

// store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
)

console.log(store.getState())

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

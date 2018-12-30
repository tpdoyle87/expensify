// library imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Import we created
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
// Css imports
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';



const store = configureStore();

store.dispatch(addExpense({description: "water", amount: 400, createdAt: 344000}))
store.dispatch(addExpense({description: "rent", amount: 4000, createdAt: 344200}))
store.dispatch(addExpense({description: "gas", amount: 109500, createdAt: 299000}))
// allows all components to have access to the redux store
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)


ReactDOM.render(jsx, document.getElementById('root'));

// library imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Import we created
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";

// Css imports
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
// database
import './firebase/firebase'



const store = configureStore();

// allows all components to have access to the redux store
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));


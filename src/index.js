// library imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Import we created
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from './actions/expenses'
import { login, logout } from './actions/auth'
import LoadingPage from './components/LoadingPage'

// Css imports
import 'normalize.css/normalize.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';
// database
import { firebase } from './firebase/firebase'

const store = configureStore();
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true
  }
}
// allows all components to have access to the redux store
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(<LoadingPage />, document.getElementById('root'));



firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid))
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard')
      }
    })
  } else {
    store.dispatch(logout())
    renderApp();
    history.push('/')
  }
});

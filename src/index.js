import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './styles/styles.scss';

import Dashboard from './components/dashboard';

const AddExpensePage = () => (
    <h1>Add Expense Page</h1>
)

const EditExpensePage = () => (
  <h1>Edit Expense Page</h1>
)

const HelpPage = () => (
  <h1>Help Page</h1>
)

const NotFound = () => (
  <h1>404</h1>
)

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Dashboard} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage}/>
      <Route component={NotFound}  />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));

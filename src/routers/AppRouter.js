import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom'

import Dashboard from '../components/dashboard'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import NotFound from '../components/NotFound'
import Header from '../components/Header'

const AppRouter = () => (
  <BrowserRouter>
    <div>
    <Header />
      <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit/:id" component={EditExpensePage} />
      <Route path="/help" component={HelpPage}/>
      <Route component={NotFound}  />
    </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter

import React from 'react';

import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <div>
      <div>
        <h1>Expensify</h1>
      </div>
      <div>
        <NavLink exact to="/" activeClassName="active">Dashboard</NavLink>
        <NavLink to="/create" activeClassName="active">Add Expense</NavLink>
      </div>
    </div>
  </header>
)

export default Header;

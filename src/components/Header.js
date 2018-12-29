import React from 'react';

import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <div>
      <div>
        <NavLink exact to="/" activeClassName="active"><h1>Expensify</h1></NavLink>
      </div>
      <div>
        <NavLink to="/create" activeClassName="active">Add Expense</NavLink>

      </div>
    </div>
  </header>
)

export default Header;

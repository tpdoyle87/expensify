import React from 'react';

import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

const Header = ({ startLogout }) => (
  <header>
    <div>
        <NavLink exact to="/"><h1> Expensify</h1></NavLink>

        <NavLink exact to="/dashboard" activeClassName="active">Dashboard</NavLink>
        <NavLink to="/create" activeClassName="active">Add Expense</NavLink>
        <button onClick={startLogout}>Logout</button>
    </div>
  </header>
)

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);

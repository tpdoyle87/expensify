import React from 'react'
import ConnectedExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

export default class Dashboard extends React.Component {
  render() {
    return(
      <div>
        <ExpenseListFilters />
        <ConnectedExpenseList />

      </div>
    );
  }
}

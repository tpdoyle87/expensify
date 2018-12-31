import React from 'react'
import ConnectedExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ConnectedExpenseSummary from './ExpenseSummary'

export default class Dashboard extends React.Component {
  render() {
    return(
      <div>
        <ConnectedExpenseSummary />
        <ExpenseListFilters />
        <ConnectedExpenseList />
      </div>
    );
  }
}

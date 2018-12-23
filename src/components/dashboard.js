import React from 'react'
import ConnectedExpenseList from './ExpenseList'

export default class Dashboard extends React.Component {
  render() {
    return(
      <div>
        <ConnectedExpenseList />
      </div>
    );
  }
}

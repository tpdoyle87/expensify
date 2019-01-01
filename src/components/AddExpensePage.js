import React from 'react'
import { connect } from 'react-redux'

import ExpenseForm from './ExpenseForm'
import { startAddExpense } from '../actions/expenses'

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
      this.props.startAddExpense(expense)
      this.props.history.push("/")
  }

  render() {
    return (
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage);

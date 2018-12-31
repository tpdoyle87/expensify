import React from 'react'
import { connect } from 'react-redux'

import selectExpense from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

const ExpenseSummary = (props) => {
  return (
  <div>
    {props.expenses.length === 1 ? (
      <h5>Viewing 1 expense totalling ${props.expensesTotal / 100}</h5>
      ) : (
      <h5> Viewing {props.expenses.length} expenses totalling ${props.expensesTotal / 100}</h5>
      )
    }
  </div>
  )

}

const mapStateToProps = (state) => {
  return {
    expenses: selectExpense(state.expenses, state.filters),
    expensesTotal: selectExpensesTotal(selectExpense(state.expenses, state.filters))
  }
}

export default connect(mapStateToProps)(ExpenseSummary)

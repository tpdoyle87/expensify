import React from 'react'
import { connect } from 'react-redux'

import numeral from 'numeral'

import selectExpense from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

const ExpenseSummary = (props) => {
  return (
  <div>
    {props.expenses.length === 1 ? (
      <h5>Viewing 1 expense totalling {numeral(props.expensesTotal / 100).format('$0,0.00')}</h5>
      ) : (
      <h5> Viewing {props.expenses.length} expenses totalling {numeral(props.expensesTotal / 100).format('$0,0.00')}</h5>
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

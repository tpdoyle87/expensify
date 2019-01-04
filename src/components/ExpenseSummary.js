import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import numeral from 'numeral'

import selectExpense from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

const ExpenseSummary = (props) => {
  return (
  <div className="page-header">
    <div className="content-container">
      {props.expenses.length === 1 ? (
        <div>
          <h1 className="page-header__title">Viewing <span>1</span> expense totalling <span>{numeral(props.expensesTotal / 100).format('$0,0.00')}</span></h1>
          <h3 className="page-header__title"><span>{props.allExpenses.length}</span> Expense(s) totalling <span>{numeral(props.allExpensesTotal / 100).format('$0,0.00')}</span></h3>
        </div>
        ) : (
          <div>
            <h1 className="page-header__title"> Viewing <span>{props.expenses.length}</span> expenses totalling <span>{numeral(props.expensesTotal / 100).format('$0,0.00')}</span></h1>
            <h3 className="page-header__title"><span>{props.allExpenses.length}</span> Expense(s) totalling <span>{numeral(props.allExpensesTotal / 100).format('$0,0.00')}</span></h3>
          </div>

        )
      }
      <div className="page-header__actions">
        <Link className="button" to="/create">Add Expense</Link>
      </div>
    </div>
  </div>
  )
}

const mapStateToProps = (state) => {
  return {
    expenses: selectExpense(state.expenses, state.filters),
    expensesTotal: selectExpensesTotal(selectExpense(state.expenses, state.filters)),
    allExpenses: state.expenses,
    allExpensesTotal: selectExpensesTotal(state.expenses)
  }
}

export default connect(mapStateToProps)(ExpenseSummary)

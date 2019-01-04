import React from 'react'
import { connect } from 'react-redux'

import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

class ExpenseList extends React.Component {

  render() {
    return (
      <div className="content-container">
        <div className="list-header">
          <div className="show-for-mobile">Expenses</div>
          <div className="show-for-desktop">Expense</div>
          <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
          {
            this.props.expenses.length > 0 ? (
              this.props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense} />;
              })
            ) : (
                <div className="list-item--message">
                  <span>No expenses</span>
                </div>

              )
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
    filters: state.filters
  }
};


export default connect(mapStateToProps)(ExpenseList);


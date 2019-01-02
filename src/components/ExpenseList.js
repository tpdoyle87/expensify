import React from 'react'
import { connect } from 'react-redux'

import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'
import { setExpenses } from '../actions/expenses'

class ExpenseList extends React.Component {

  render() {
    return (
      <div>
        {
          this.props.expenses.length > 0 ? (
            this.props.expenses.map((expense) => {
              return <ExpenseListItem key={expense.id} {...expense} />;
            })
          ) : (
              <p>No expenses</p>
            )
        }
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


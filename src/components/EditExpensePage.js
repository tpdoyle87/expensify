import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm'
import { startEditExpense } from '../actions/expenses'
import { startRemoveExpense } from '../actions/expenses'

class EditExpensePage extends React.Component {
  onEdit = (expense) => {
    this.props.dispatch(startEditExpense(this.props.expense.id, expense))
    this.props.history.push("/dashboard")
  }

  onRemove = () => {
    this.props.dispatch(startRemoveExpense({ id: this.props.expense.id }))
    this.props.history.push('/dashboard')
  }
  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onEdit}
        />
        <button onClick={this.onRemove}
        >
          Remove
      </button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
}



export default connect(mapStateToProps)(EditExpensePage);

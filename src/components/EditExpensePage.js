import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm'
import RemoveModal from './RemoveModal'
import { startEditExpense } from '../actions/expenses'
import { startRemoveExpense } from '../actions/expenses'

class EditExpensePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false
    }
  }

  onEdit = (expense) => {
    this.props.dispatch(startEditExpense(this.props.expense.id, expense))
    this.props.history.push("/dashboard")
  }

  changeModal = () => {
    this.setState((prevState) => ({
      modalOpen: !prevState.modalOpen
    }))
  }

  onRemove = () => {
    this.props.dispatch(startRemoveExpense({ id: this.props.expense.id }))
    this.props.history.push('/dashboard')
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onEdit}
          />
          <RemoveModal
            expense={this.props.expense}
            isOpen={this.state.modalOpen}
            onRequestClose={this.changeModal}
            onRemove={this.onRemove}
            ariaHideApp={false}
          />

          <button
          className="button button--secondary"
          onClick={() => {
            this.changeModal()
          }}>
            Remove Expense
          </button>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id),
  }
}



export default connect(mapStateToProps)(EditExpensePage);

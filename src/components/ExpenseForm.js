import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import uuid from 'uuid'

const date = moment();
export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : 0,
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calanderFocused: false,
      error: undefined
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({ description }))
  }

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }))
  }
  onAmountChange = (e) => {
    const amount = e.target.value
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }
  onDateChange = (createdAt) => {
    if (createdAt) {
    this.setState(() => ({ createdAt }))
  }}
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calanderFocused: focused }))
  }
  onSubmit = (e) => {
    e.preventDefault()
    if (!this.state.description || !this.state.amount ) {
      //set Error State to "Please provide description and amount"
      this.setState(() => ({
        error: "Please Provide a description and amount"
      }))
    } else {
      // clear the error
      this.setState(() => ({
        error: undefined
      }))
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        {this.state.description === '' ? <h3>Add Expense</h3> : <h3>Edit Expense</h3>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
            autoFocus
          />
          <input
            type="text"
            placeholder="amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calanderFocused}
            onFocusChange={this.onFocusChange}
            id={uuid()}
            numberOfMonths={1}
            isOutsideRange={() => false}
            hideKeyboardShortcutsPanel={true}
          />
          <textarea
            placeholder="add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >

          </textarea>
          <button>{this.state.description === '' ? "Add Expense" : "Edit Expense"}</button>
        </form>
      </div>
    )
  }
}


import React from 'react';
import uuid from 'uuid'
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'
import { DateRangePicker } from "react-dates"
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


class ExpenseListFilters extends React.Component {
  state = {
    calenderFocused: null
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate))
    this.props.dispatch(setEndDate(endDate))
  }
  render() {
    return(
  <div>
    <input
      type="text"
      value={this.props.filters.text}
      onChange={(e) => {
      this.props.dispatch(setTextFilter(e.target.value))
    }}
    />
    <select
      value={this.props.filters.sortBy}
      onChange={(e) => {
        if (e.target.value === "amount") {
          this.props.dispatch(sortByAmount(e.target.value))
        } else {
          this.props.dispatch(sortByDate(e.target.value))
        }
    }}>
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
    <DateRangePicker
      startDate={this.props.filters.startDate}
      endDate={this.props.filters.endDate}
      startDateId={uuid()}
      endDateId={uuid()}
      onDatesChange={ this.onDatesChange}
      focusedInput={this.state.calenderFocused}
      onFocusChange={calenderFocused => this.setState({calenderFocused})}
      numberOfMonths={1}
      isOutsideRange={() => false}
      showClearDates={true}
    />
  </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}



export default connect(mapStateToProps)(ExpenseListFilters)

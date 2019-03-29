import React from 'react'
import moment from 'moment'

import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'

import { formatDate, parseDate } from 'react-day-picker/moment'

class DatePicker extends React.Component {
  static defaultProps = {
    classNamesList: {
      container: 'd-block mb-3',
      overlay: ''
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      from: undefined,
      to: undefined
    }
  }
  showFromMonth() {
    const { from, to } = this.state
    if (!from) {
      return
    }
  }
  handleFromChange = (from) => {
    this.setState({ from })
  }
  handleToChange = (to) => {
    this.setState({ to }, this.showFromMonth)
  }
  renderInput = (props) => {
    return <input className="form-control" {...props} />
  }
  render() {
    const { from, to } = this.state
    const modifiers = { start: from, end: to }
    return (
      <div className="form-group">
        <label>Please select a period</label>
        <DayPickerInput
          value={from}
          placeholder="From"
          format="LL"
          formatDate={formatDate}
          parseDate={parseDate}
          classNames={this.props.classNamesList}
          component={this.renderInput}
          dayPickerProps={{
            selectedDays: [from, { from, to }],
            disabledDays: { after: to },
            toMonth: to,
            modifiers,
            numberOfMonths: 2
          }}
          onDayChange={this.handleFromChange}
        />
        <DayPickerInput
          value={to}
          placeholder="To"
          format="LL"
          formatDate={formatDate}
          parseDate={parseDate}
          classNames={this.props.classNamesList}
          component={this.renderInput}
          dayPickerProps={{
            selectedDays: [from, { from, to }],
            disabledDays: { before: from },
            modifiers,
            month: from,
            fromMonth: from,
            numberOfMonths: 2
          }}
          onDayChange={this.handleToChange}
        />
        {(from || to) && (
          <div className="alert success">
            <ul className="mb-0">
              <li>{from && `You have selected a from date: ${from}`}</li>
              <li>{to && `You have selected a to date: ${to}`}</li>
            </ul>
          </div>
        )}
        {!from && !to && (
          <div className="alert alert-danger">
            <ul className="mb-0">
              <li>{!from && 'Please select a from date'}</li>
              <li>{!to && 'Please select a to date'}</li>
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default DatePicker

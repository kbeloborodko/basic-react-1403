import React from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'

class DatePicker extends React.Component {
  static defaultProps = {
    classNamesList: {
      container: 'd-block mb-3'
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      from: undefined,
      to: undefined
    }
  }
  renderInput = (props) => {
    return <input className="form-control" {...props} />
  }
  render() {
    const { from, to } = this.state
    return (
      <div className="form-group">
        <label>{!from && 'Please select from date'}</label>
        <DayPickerInput
          fromMonth="from"
          fromMonth={from}
          value={from}
          placeholder="From"
          classNames={this.props.classNamesList}
          component={this.renderInput}
        />
        <DayPickerInput
          fromMonth="from"
          fromMonth={from}
          value={to}
          placeholder="To"
          classNames={this.props.classNamesList}
          component={this.renderInput}
        />
      </div>
    )
  }
}

export default DatePicker

import React from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'

class DatePicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.getInitialState()
  }
  getInitialState() {
    return {
      from: null,
      to: null
    }
  }
  render() {
    const { from } = this.state
    return (
      <div class="form-group">
        <label>{!from && 'Please select from date'}</label>
        <DayPickerInput fromMonth="from" className="Range" fromMonth={from} />
      </div>
    )
  }
}

export default DatePicker

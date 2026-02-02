/* eslint-disable react/prop-types */
import { DateRange } from 'react-date-range'

const Calender = ({ value, handleDateChange , room}) => {
  return (
    <DateRange
      ranges={[value]}
      rangeColors={['#F43F5E']}
      direction='vertical'
      showDateDisplay={false}
      onChange={handleDateChange}
      minDate={new Date(room?.from)}
      maxDate={new Date(room?.to)}
    />
  )
}

export default Calender
/* eslint-disable react/prop-types */
import { DateRange } from 'react-date-range'

const Calender = ({ value, handleDateChange , room,disabledRanges }) => {
    const isDateBlocked = (date) => {
    return disabledRanges?.some(range =>
      date >= range.startDate && date <= range.endDate
    );
  };
  return (
    <DateRange
      ranges={[value]}
      rangeColors={['#F43F5E']}
      direction='vertical'
      showDateDisplay={false}
      onChange={handleDateChange}
      minDate={new Date(room?.from)}
      maxDate={new Date(room?.to)}
            disabledDay={isDateBlocked}
 dayContentRenderer={(date) => {
    const blocked = isDateBlocked(date);
    return (
      <div
        className={`w-full h-full flex items-center justify-center rounded-full
        ${blocked ? "bg-green-500 text-black" : "text-black"}`}
      >
        {date.getDate()}
      </div>
    );
  }}
    />
  )
}

export default Calender
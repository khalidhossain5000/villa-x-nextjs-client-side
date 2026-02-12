/* eslint-disable react/prop-types */
import { DateRange } from "react-date-range";

const Calender = ({ value, handleDateChange, room, disabledRanges }) => {
  const isDateBlocked = (date) => {
    return disabledRanges?.some(
      (range) => date >= range.startDate && date <= range.endDate,
    );
  };
  return (
    
    <DateRange
      ranges={[value]}
      rangeColors={["#0fe60e"]}
      direction="vertical"
      showDateDisplay={false}
      onChange={handleDateChange}
      minDate={new Date(room?.from)}
      maxDate={new Date(room?.to)}
      disabledDay={isDateBlocked}
    
        wrapperClassName="bg-red-900 dark:bg-gray-900 p-6 rounded-lg dark:text-white" // outer wrapper

      dayContentRenderer={(date) => {
        const blocked = isDateBlocked(date);
        return (
          <div
            className={`  w-full h-full flex items-center justify-center rounded-full
        ${blocked ? "bg-red-500 text-green-600" : "text-black "}`}
          >
            {date.getDate()}
          </div>
        );
      }}
    />
   
  );
};

export default Calender;

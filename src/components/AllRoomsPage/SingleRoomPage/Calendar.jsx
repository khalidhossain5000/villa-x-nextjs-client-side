
'use client';

/* eslint-disable react/prop-types */
import { DateRange } from "react-date-range";
import { useTheme } from "next-themes";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Calender = ({ value, handleDateChange, room, disabledRanges }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const today = new Date();
  today.setHours(0, 0, 0, 0);


  const roomFromDate = room?.from ? new Date(room.from) : today;
  roomFromDate.setHours(0, 0, 0, 0);


  const finalMinDate = roomFromDate > today ? roomFromDate : today;

 
  const isDateBlocked = (date) => {
    return disabledRanges?.some((range) => {
      const start = new Date(range.startDate);
      const end = new Date(range.endDate);

      start.setHours(0, 0, 0, 0);
      end.setHours(0, 0, 0, 0);
      const current = new Date(date);
      current.setHours(0, 0, 0, 0);
      
      return current >= start && current <= end;
    });
  };

  return (
    <div className="calendar-wrapper custom-dark-calendar p-2 rounded-xl bg-white dark:bg-[#111827] border border-gray-200 dark:border-zinc-800 shadow-lg">
      <DateRange
        ranges={[value]}
        rangeColors={[isDark ? "#0fe60e" : "#059669"]}
        direction="vertical"
        showDateDisplay={false}
        onChange={handleDateChange}
        
        minDate={finalMinDate} 
        maxDate={new Date(room?.to)}
        disabledDay={isDateBlocked}
        
        weekdayDisplayFormat="EEEEEE"
        dayContentRenderer={(date) => {
          const blocked = isDateBlocked(date);
          const isSelected = date >= value.startDate && date <= value.endDate;
          
          const currentDay = new Date(date);
          currentDay.setHours(0, 0, 0, 0);
          const isPast = currentDay < today;

          return (
            <div
              className={`w-full h-full flex items-center justify-center rounded-full transition-all duration-300
                ${
                  blocked
                    ? "bg-red-600 text-white cursor-not-allowed opacity-80"
                    : isPast
                      ? "text-black dark:text-gray-600 cursor-not-allowed dark:bg-gray-600" 
                      : isSelected
                        ? "text-black font-bold dark:bg-cyan-600"
                        : "dark:text-gray-300 text-gray-800 "
                }`}
            >
              <span className="relative z-10 text-sm md:text-base">
                {date.getDate()}
              </span>
            </div>
          );
        }}
      />
    </div>
  );
};

export default Calender;







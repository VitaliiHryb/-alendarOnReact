import React, { useEffect } from 'react';
// import isCurrentDay from './dateUtils';

import { days } from '../../utils/dateUtils.js';

const Navigation = ({ weekDates }) => {
  const currentDay = new Date().getDate();

  return (
    <header className="calendar__header">
      {weekDates.map(dayDate => (
        <div key={Math.random()} className="calendar__day-label day-label">
          <span
            className={
              dayDate.getDate() === currentDay
                ? 'day-label__day-name day-label__day-name_today'
                : 'day-label__day-name'
            }
          >
            {days[dayDate.getDay()]}
          </span>
          <span
            className={
              dayDate.getDate() === currentDay
                ? 'day-label__day-number day-label__day-number_today'
                : 'day-label__day-number'
            }
          >
            {dayDate.getDate()}
          </span>
        </div>
      ))}
    </header>
  );
};

// day-label__day-number : day-label__day-number_today
// day-label__day-name : day-label__day-name_today

export default Navigation;

/*
const Navigation = ({ weekDates }) => {
  return (
    <header className="calendar__header">
      {weekDates.map(dayDate => (
        <div className="calendar__day-label day-label">
          <span className="day-label__day-name">{days[dayDate.getDay()]}</span>
          <span className="day-label__day-number">{dayDate.getDate()}</span>
        </div>
      ))}
    </header>
  );
};
*/

import React, { useEffect, useState } from 'react';
import Hour from '../hour/Hour';

import './day.scss';

const Day = ({ dataDay, dayEvents, renderNewData, isToday, Now }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index); // ==> [1, 2, ... 24]

  const [marginTop, setMarginTop] = useState(Now.getMinutes());
  useEffect(() => {
    setMarginTop(Now.getMinutes());
  }, [Now]);

  const redLineStyle = {
    borderTop: '2px solid red',
    marginTop,
    height: `${59 - marginTop}px`,
  };

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map(hour => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(event => {
          return new Date(event.dateFrom).getHours() === hour;
        }); // ==> [] ... [] // 24 empty arrays

        return isToday === true && hour === Now.getHours() ? (
          <div
            className="redline"
            key={Math.random()}
            style={redLineStyle}
          ></div>
        ) : (
          <Hour
            key={Math.random()}
            dataHour={hour}
            hourEvents={hourEvents}
            renderNewData={renderNewData}
          />
        );
      })}
    </div>
  );
};

export default Day;

// dataDay ==> 12, 13, 14, 15, 16, 17, 18 (seven days of the week)
// dayEvents ==> [] ... []

// key={dataDay + hour}

// Число текущего дня должно подсвечиваться
// day-label__day-number_today

/*
const Day = ({ dataDay, dayEvents, testInfo }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index); // ==> [1, 2, ... 24]

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map(hour => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(
          event => event.dateFrom.getHours() === hour,
        ); // ==> [] ... [] // 24 empty arrays

        return (
          <Hour
            key={Math.random()}
            dataHour={hour}
            hourEvents={hourEvents}
            testInfo={testInfo}
          />
        );
      })}
    </div>
  );
};
*/

/////////// works ///////////////////
/*
const Day = ({ dataDay, dayEvents, dayId }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index); // ==> [1, 2, ... 24]

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map(hour => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(event => {
          return new Date(event.dateFrom).getHours() === hour;
        }); // ==> [] ... [] // 24 empty arrays

        return (
          <Hour key={Math.random()} dataHour={hour} hourEvents={hourEvents} />
        );
      })}
    </div>
  );
};
*/

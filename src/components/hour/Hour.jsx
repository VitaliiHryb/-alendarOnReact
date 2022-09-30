import React from 'react';

import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';

const Hour = ({ dataHour, hourEvents, testInfo }) => {
  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {/* if no events in the current hour nothing will render here */}

      {testInfo.map(({ id, time, title }) => {
        const eventHour = new Date(time).getHours();
        // if (eventHour === dataHour) {
        return (
          <Event
            key={`${id} + ${Math.random()}`}
            //calculating event height = duration of event in minutes
            // height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
            // marginTop={dateFrom.getMinutes()}
            time={time}
            title={title}
          />
        );
        // }
      })}
    </div>
  );
};

export default Hour;

// return (
//   <div className="calendar__time-slot" data-time={dataHour + 1}>
//     {/* if no events in the current hour nothing will render here */}
//     {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
//       const eventStart = `${dateFrom.getHours()}:${formatMins(
//         dateFrom.getMinutes(),
//       )}`;
//       const eventEnd = `${dateTo.getHours()}:${formatMins(
//         dateTo.getMinutes(),
//       )}`;

//       return (
//         <Event
//           key={id}
//           //calculating event height = duration of event in minutes
//           height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
//           marginTop={dateFrom.getMinutes()}
//           time={`${eventStart} - ${eventEnd}`}
//           title={title}
//           testInfo={testInfo}
//         />
//       );
//     })}
//   </div>
// );

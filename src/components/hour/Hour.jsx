import React from 'react';

import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';

const Hour = ({ dataHour, hourEvents, renderNewData }) => {
  return (
    <div
      className="calendar__time-slot"
      data-time={dataHour + 1}
      onClick={renderNewData}
    >
      {/* if no events in the current hour nothing will render here */}
      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${new Date(dateFrom).getHours()}:${formatMins(
          new Date(dateFrom).getMinutes(),
        )}`;
        const eventEnd = `${new Date(dateTo).getHours()}:${formatMins(
          new Date(dateTo).getMinutes(),
        )}`;
        return (
          <Event
            key={id}
            //calculating event height = duration of event in minutes
            height={
              (new Date(dateTo).getTime() - new Date(dateFrom).getTime()) /
              (1000 * 60)
            }
            marginTop={new Date(dateFrom).getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            renderNewData={renderNewData}
            id={id}
          />
        );
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

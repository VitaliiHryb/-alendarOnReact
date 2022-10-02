import React, { useState, useEffect } from 'react';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import events from '../../gateway/events';
import { fetchEvents } from '../../gateway/events';
import { getWeekStartDate, generateWeekRange } from '../../utils/dateUtils';

import './calendar.scss';

const Calendar = ({ weekStartDate }) => {
  const [weekDates, setWeekDates] = useState(
    generateWeekRange(getWeekStartDate(weekStartDate)),
  );

  useEffect(() => {
    setWeekDates(() => generateWeekRange(getWeekStartDate(weekStartDate)));
  }, [weekStartDate]);

  // const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  /////////////////////////////////////////////////
  /*
  const [state, setState] = useState([]);
  let eventsData = fetchEvents();

  let eventsList = eventsData.then(result => {
    result.forEach(event => {
      event.dateFrom = new Date(event.dateFrom);
      event.dateTo = new Date(event.dateTo);
    });
    return result;
  });

  useEffect(() => {
    eventsList.then(result => {
      setState(result);
    });
  }, []);
  */
  /////////////////////////////////////////////////
  const [state, setState] = useState(events);

  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week weekDates={weekDates} events={state} />
        </div>
      </div>
    </section>
  );
};

export default Calendar;

// state ==> [{id: 1, title: 'Go to the gym', description: 'some text here',
// dateFrom: Tue Sep 15 2020 10:15:00 GMT+0300 (Восточная Европа, летнее время),
// dateTo: Tue Sep 15 2020 15:00:00 GMT+0300 (Восточная Европа, летнее время)}, ... , {}]

// weekDates ==> [Mon Sep 12 2022 00:00:00 GMT+0300
// (Восточная Европа, летнее время), ... , Sun Sep 18 2022 00:00:00 GMT+0300
// (Восточная Европа, летнее время)]

// old
// class Calendar extends Component {
//   state = {
//     events,
//   };

//   render() {
//     const { weekDates } = this.props;

//     return (
//       <section className="calendar">
//         <Navigation weekDates={weekDates} />
//         <div className="calendar__body">
//           <div className="calendar__week-container">
//             <Sidebar />
//             <Week weekDates={weekDates} events={this.state.events} />
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

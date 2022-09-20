import React, { useState } from 'react';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import events from '../../gateway/events';

import './calendar.scss';

const Calendar = ({ weekDates }) => {
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

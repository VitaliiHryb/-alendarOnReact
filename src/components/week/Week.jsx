import React from 'react';
import Day from '../day/Day';

import './week.scss';

const eventsList = [
  {
    id: 1,
    title: 'go sleep',
    description: 'go to the bed',
    time: 1664394710833,
  },
  {
    id: 2,
    title: 'go home',
    description: 'moove to the Kyiv',
    time: 1664494810833,
  },
  {
    id: 3,
    title: 'plant a tree',
    description: 'today I will plant a tree',
    time: 1664594810833,
  },
  {
    id: 1,
    title: 'wake up',
    description: 'at this moment I need wake up',
    time: 1664564810833,
  },
  {
    id: 1,
    title: 'live coding',
    description: 'this is react lesson',
    time: 1664794810833,
  },
  {
    id: 1,
    title: 'interview',
    description: 'this is js interview',
    time: 1664894810833,
  },
  {
    id: 1,
    title: 'english',
    description: 'today is an english lesson',
    time: 1664994810833,
  },
];

const Week = ({ weekDates, events }) => {
  // console.log(weekDates);
  return (
    <div className="calendar__week">
      {weekDates.map(dayStart => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24,
        ); // ==> [1663016400000, ... , 1663534800000] // every End day time of the week
        // Your time zone: вторник, 13 сентября 2022 г., 0:00:00 GMT+03:00 DST // ... понедельник ...

        //getting all events from the day we will render
        const eventsListData = eventsList.filter(
          event =>
            new Date(event.time).getDate() === dayStart.getDate() &&
            new Date(event.time).getMonth() === dayStart.getMonth(),
        ); // [] ... []

        // dayStart.getDate() ==> 12, 13, 14, 15, 16, 17, 18 (seven days of the week)

        return (
          <Day
            key={Math.random()}
            dataDay={dayStart.getDate()}
            // dayEvents={dayEvents}
            testInfo={eventsListData}
          />
        );
      })}
    </div>
  );
};

export default Week;

// weekDates ==> [Mon Sep 12 2022 00:00:00 GMT+0300
// (Восточная Европа, летнее время), ... , Sun Sep 18 2022 00:00:00 GMT+0300
// (Восточная Европа, летнее время)]

// events ==> [{id: 1, title: 'Go to the gym', description: 'some text here',
// dateFrom: Tue Sep 15 2020 10:15:00 GMT+0300 (Восточная Европа, летнее время),
// dateTo: Tue Sep 15 2020 15:00:00 GMT+0300 (Восточная Европа, летнее время)}, ... , {}]

// key={dayStart.getDate()}

/*
const Week = ({ weekDates, events }) => {
  // console.log(weekDates);
  return (
    <div className="calendar__week">
      {weekDates.map(dayStart => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24,
        ); // ==> [1663016400000, ... , 1663534800000] // every End day time of the week
        // Your time zone: вторник, 13 сентября 2022 г., 0:00:00 GMT+03:00 DST // ... понедельник ...

        //getting all events from the day we will render
        const dayEvents = events.filter(
          event => event.dateFrom > dayStart && event.dateTo < dayEnd,
        ); // [] ... []

        // dayStart.getDate() ==> 12, 13, 14, 15, 16, 17, 18 (seven days of the week)

        return (
          <Day
            key={Math.random()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            testInfo={eventsList}
          />
        );
      })}
    </div>
  );
};
*/

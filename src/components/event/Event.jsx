import React from 'react';

import './event.scss';

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

// console.log(eventsList.map(el => new Date(el.time)));

const Event = ({ height, marginTop, title, time }) => {
  const eventStyle = {
    height,
    marginTop,
  };

  return (
    <div style={eventStyle} className="event">
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
    </div>
  );
};

export default Event;

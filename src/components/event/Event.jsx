import React from 'react';
import { deleteEvents } from '../../gateway/events';
import './event.scss';

const Event = ({ height, marginTop, title, time, id, renderNewData }) => {
  const eventStyle = {
    height,
    marginTop,
  };

  const deleteEvent = () => {
    deleteEvents(id).then(() => renderNewData());
  };

  return (
    <div style={eventStyle} className="event" onClick={deleteEvent}>
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
    </div>
  );
};

export default Event;

// const Event = ({ height, marginTop, title, time }) => {
//   const eventStyle = {
//     height,
//     marginTop,
//   };

//   return (
//     <div style={eventStyle} className="event">
//       <div className="event__title">{title}</div>
//       <div className="event__time">{time}</div>
//     </div>
//   );
// };

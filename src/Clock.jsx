import React, { useState, useEffect } from 'react';
import moment from 'moment';

function Clock({ offset, location }) {
  const [time, setDate] = useState(0);

  useEffect(() => {
    setDate(moment(new Date()).utcOffset(offset).format('h:mm:ss A'));

    const intervalId = setInterval(() => {
      setDate(moment(new Date()).utcOffset(offset).format('h:mm:ss A'));
    }, 1000);

    return () => clearInterval(intervalId);
  });

  return (
    <div className="clock">
      <span className="clock__location">{location}</span>
      <span className="clock__time">{time}</span>
    </div>
  );
}

export default Clock;

// Создайте компоненту, которая покажет время в разных городах
// 0. index.jsx напишите код, который отрисует компоненту из src/App.jsx в #root элемент
// 1. Clock принимает Название города в свойстве location
// и смещение по времени этого города относительно нулевого меридиана
// в свойстве offset и отрисовует часы
// 2. Clock должна обновлять время каждую секунду ==> setInterval
// 3. App.jsx должна отрисовать три компоненты src/Clock.jsx
// для разных городов (пример в файле example.png)

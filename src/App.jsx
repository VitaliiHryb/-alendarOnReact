import React, { useEffect, useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import moment from 'moment';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';
const App = () => {
  // const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [weekStartDate, setWeekStartDate] = useState(new Date());

  const handlePrevWeek = () => {
    // console.log('prev');
    setWeekStartDate(prevValue => {
      prevValue.setDate(prevValue.getDate() - 7);
      return new Date(prevValue.getTime());
    });
  };

  const handleNextWeek = () => {
    // console.log('next');
    setWeekStartDate(prevValue => {
      prevValue.setDate(prevValue.getDate() + 7);
      return new Date(prevValue.getTime());
    });
  };

  const handleCurrentWeek = () => {
    setWeekStartDate(() => new Date());
  };

  // const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  return (
    <>
      <Header
        nextWeek={handleNextWeek}
        prevWeek={handlePrevWeek}
        addCurrentDay={handleCurrentWeek}
      />
      <Calendar weekStartDate={weekStartDate} />
    </>
  );
};

export default App;

// weekDates ==> [Mon Sep 12 2022 00:00:00 GMT+0300
// (Восточная Европа, летнее время), ... , Sun Sep 18 2022 00:00:00 GMT+0300
// (Восточная Европа, летнее время)]

// old
/*
class App extends Component {
  state = {
    weekStartDate: new Date(),
  };

  render() {
    const { weekStartDate } = this.state;
    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

    return (
      <>
        <Header />
        <Calendar weekDates={weekDates} />
      </>
    );
  }
}
*/

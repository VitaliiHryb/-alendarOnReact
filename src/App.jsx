import React, { useEffect, useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal';
import createEvent from './gateway/events';
import moment from 'moment';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';
const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());

  const handlePrevWeek = () => {
    setWeekStartDate(prevValue => {
      prevValue.setDate(prevValue.getDate() - 7);
      return new Date(prevValue.getTime());
    });
  };

  const handleNextWeek = () => {
    setWeekStartDate(prevValue => {
      prevValue.setDate(prevValue.getDate() + 7);
      return new Date(prevValue.getTime());
    });
  };

  const handleCurrentWeek = () => {
    setWeekStartDate(() => new Date());
  };

  /////////////////////////    Code below works    ///////////////////////
  const [isForm, setIsForm] = useState(false);

  const openFormHandler = () => {
    setIsForm(() => true);
  };

  const closeFormHandler = () => {
    setIsForm(() => false);
  };
  ////////////////////////// Testing
  const [reRender, setReRender] = useState(false);

  const renderNewData = () => {
    if (reRender === false) {
      setReRender(true);
    } else {
      setReRender(false);
    }
  };

  return (
    <>
      <Header
        nextWeek={handleNextWeek}
        prevWeek={handlePrevWeek}
        addCurrentDay={handleCurrentWeek}
        weekStartDate={weekStartDate}
        openFormHandler={openFormHandler}
      />
      <Calendar weekStartDate={weekStartDate} reRender={reRender} />
      {isForm ? (
        <Modal
          closeFormHandler={closeFormHandler}
          renderNewData={renderNewData}
        />
      ) : null}
    </>
  );
};

export default App;

// weekDates ==> [Mon Sep 12 2022 00:00:00 GMT+0300
// (Восточная Европа, летнее время), ... , Sun Sep 18 2022 00:00:00 GMT+0300
// (Восточная Европа, летнее время)]

/*
<Modal
  {...this.state.popupData}
  hideModal={this.handleHidePopup}
  handleSubmit={this.handleSubmit}
  deleteEvent={this.deleteEvent}
  isEvent={this.state.isEvent}
/>;
*/

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

import React, { useState } from 'react';
// import moment from 'moment';

import './header.scss';

const Header = ({ nextWeek, prevWeek, addCurrentDay }) => {
  return (
    <header className="header">
      <button className="button create-event-btn">
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button
          onClick={addCurrentDay}
          className="navigation__today-btn button"
        >
          Today
        </button>
        <button onClick={prevWeek} className="icon-button navigation__nav-icon">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button onClick={nextWeek} className="icon-button navigation__nav-icon">
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month"></span>
      </div>
    </header>
  );
};

export default Header;

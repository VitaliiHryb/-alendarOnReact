import React, { useEffect, useState } from 'react';

const getTop = () => {
  const hours = new Data().getHours();
  const minutes = new Data().getMinutes();
  const top = +hours * 60 + +minutes;
  return `${top}px`;
};

const Redline = () => {
  const [top, setTop] = useState(getTop());

  useInterval(() => {
    setTop({
      top: getTop(),
    });
  }, 6000);

  return <div className="red-line" style={{ top: top }} />;
};

export default Redline;

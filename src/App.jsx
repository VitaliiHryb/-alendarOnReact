import React, { useState } from 'react';
import Clock from './Clock';

function App() {
  const [visible, setVisible] = useState(true);

  const btnText = () => {
    return visible ? 'Hide Time' : 'Show Time';
  };

  return (
    <>
      <button
        className="btn"
        onClick={() => setVisible(visible ? false : true)}
      >
        {btnText()}
      </button>
      <div className="main">
        {visible && (
          <>
            <Clock location="New York" offset={0} />
            <Clock location="Kiyv" offset={2} />
            <Clock location="London" offset={-5} />
          </>
        )}
      </div>
    </>
  );
}

export default App;

// London (смещение 0), Kyiv (смещение 2), New York (смещение -5)

// 1. App должна содержать кнопку, которая спрячет все компоненты Clock с экрана.
// 2. Не забудьте почистить интервал перед тем, как компонента удаляется со страницы

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { functionClock } from '../services';

function Clock({ setPath }) {
  const { location: { pathname } } = useHistory();
  const [clock, setClock] = useState({ h: 0, m: 0, s: 0 });

  useEffect(() => {
    setPath(pathname);
    setInterval(() => functionClock(setClock), 1000);
  }, []);

  return (
    <div>
      <span>{ clock.h < 10 ? `0${clock.h}` : clock.h }:</span>
      <span>{ clock.m < 10 ? `0${clock.m}` : clock.m }:</span>
      <span>{ clock.s < 10 ? `0${clock.s}` : clock.s }</span>
    </div>
  );
};

export default Clock;
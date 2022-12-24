import React, { useState, useEffect } from 'react';
import { functionClock } from '../services';

function Clock() {
  const [clock, setClock] = useState({ h: 0, m: 0, s: 0 });

  useEffect(() => {
    setInterval(() => functionClock(setClock), 1000);
  }, []);

  return (
    <main>
      <div>
        <span>{ clock.h < 10 ? `0${clock.h}` : clock.h }</span>
        <span>{ clock.m < 10 ? `0${clock.m}` : clock.m }</span>
        <span>{ clock.s < 10 ? `0${clock.s}` : clock.s }</span>
      </div>
    </main>
  );
};

export default Clock;
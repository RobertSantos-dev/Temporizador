import React, { useState, useEffect } from 'react';
import { functionTimer, functionResetTimer } from '../services';

function Timer() {
  const [timer, setTimer] = useState({ h: 0, m: 0, s: 0 });
  const [control, setControl] = useState();
  const [power, setPower] = useState(false);

  useEffect(() => {
    if (power) setControl(functionTimer(setTimer));
    if (!power) clearInterval(control);
  }, [power]);

  return (
    <main>
      <div>
        <span>{ timer.h < 10 ? `0${timer.h}` : timer.h }</span>
        <span>{ timer.m < 10 ? `0${timer.m}` : timer.m }</span>
        <span>{ timer.s < 10 ? `0${timer.s}` : timer.s }</span>
      </div>
      <div>
        <button onClick={() => setPower(true)}>start</button>
        <button onClick={() => setPower(false)}>stop</button>
        <button onClick={() => functionResetTimer(setTimer, setPower) }>
          reset
        </button>
      </div>
    </main>
  );
};

export default Timer;
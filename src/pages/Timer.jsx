import React, { useState, useEffect } from 'react';
import { functionTimer, functionStopTimer, functionResetTimer } from '../services';

import '../styles/Timer.css';

function Timer() {
  const [timer, setTimer] = useState({ m: 0, s: 0 });
  const [control, setControl] = useState();
  const [isDisabled, setIsDisabled] = useState({ s: false, p: true, r: true });
  const [power, setPower] = useState(false);

  useEffect(() => {
    if (power) setControl(functionTimer(setTimer, setIsDisabled));
    if (!power) clearInterval(control);
  }, [power]);

  return (
    <div>
      <div className='numbers'>
        <span id='min' >{ timer.m }:</span>
        <span id='seg' >{ timer.s < 10 ? `0${timer.s}` : timer.s }</span>
      </div>
      <div className='btn-control'>
        <button
          id='btn-start'
          disabled={ isDisabled.s }
          style={{ backgroundColor: !isDisabled.s ? '#d52727' : '#d5272786' }}
          onClick={() => setPower(true)}>
            Start
        </button>
        <button
          id='btn-stop'
          disabled={ isDisabled.p }
          style={{ backgroundColor: !isDisabled.p ? '#d52727' : '#d5272786' }}
          onClick={() => functionStopTimer(setIsDisabled, setPower)}>
            Stop
        </button>
        <button
          id='btn-reset'
          disabled={ isDisabled.r }
          style={{ backgroundColor: !isDisabled.r ? '#d52727' : '#d5272786' }}
          onClick={() => functionResetTimer(setTimer, setPower, setIsDisabled) }>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
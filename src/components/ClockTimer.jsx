import React, { useState } from 'react';
import { BsStopwatchFill, BsClockFill } from 'react-icons/bs';
import { Switch, Route, useHistory } from 'react-router-dom';

import Clock from '../pages/Clock';
import Timer from '../pages/Timer';
import '../styles/Clock.css';
import { functionRoute, buttonConditionsTrue, buttonConditionsFalse } from '../services';

function ClockTimer() {
  const { location: { pathname }, push } = useHistory();
  const [path, setPath] = useState(pathname);
  const [isDisabled, setIsDisabled] = useState({ b1: true, b2: false });

  return (
    <main>
      <div className='div-btns'>
      <button
        className='btn-route'
        data-testid='btn-clock'
        style={ isDisabled.b1 ? buttonConditionsTrue : buttonConditionsFalse }
        disabled={ isDisabled.b1 }
        onClick={ () => functionRoute(push, path, setPath, setIsDisabled) }
      >
        <BsClockFill />
      </button>
      <button
        className='btn-route'
        data-testid='btn-stopwatch'
        style={ isDisabled.b2 ? buttonConditionsTrue : buttonConditionsFalse }
        disabled={ isDisabled.b2 }
        onClick={ () => functionRoute(push, path, setPath, setIsDisabled) }
      >
        <BsStopwatchFill />
      </button>
      </div>
      <div className='div-clock'>
        <div className='title-function'>
          <p>{ path === '/' ? 'CLOCK' : 'STOPWATCH' }</p>
        </div>
        <Switch>
          <Route path='/timer' component={ Timer } />
          <Route exact path='/' component={ Clock } />
        </Switch>
      </div>
    </main>
  );
};

export default ClockTimer;
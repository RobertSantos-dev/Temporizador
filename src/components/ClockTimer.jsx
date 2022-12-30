import React, { useEffect, useState } from 'react';
import { BsStopwatchFill, BsClockFill } from 'react-icons/bs';
import { Switch, Route, useHistory } from 'react-router-dom';

import Clock from '../pages/Clock';
import Timer from '../pages/Timer';
import '../styles/Clock.css';
import { functionRoute, buttonConditionsTrue, buttonConditionsFalse } from '../services';

function ClockTimer() {
  const { location: { pathname }, push } = useHistory();
  const [path, setPath] = useState(pathname);
  const [isDisabled, setIsDisabled] = useState({});

  useEffect(() => {
    if (path === '/') setIsDisabled({ b1: true, b2: false });
    else setIsDisabled({ b1: false, b2: true });
  }, [path]);

  return (
    <main>
      <div className='div-btns'>
      <button
        className='btn-route'
        data-testid='btn-clock'
        style={ isDisabled.b1 ? buttonConditionsTrue : buttonConditionsFalse }
        disabled={ isDisabled.b1 }
        onClick={ () => functionRoute(push, path, setPath) }
      >
        <BsClockFill />
      </button>
      <button
        className='btn-route'
        data-testid='btn-stopwatch'
        style={ isDisabled.b2 ? buttonConditionsTrue : buttonConditionsFalse }
        disabled={ isDisabled.b2 }
        onClick={ () => functionRoute(push, path, setPath) }
      >
        <BsStopwatchFill />
      </button>
      </div>
      <div className='div-clock'>
        <div className='title-function'>
          <p>{ path === '/' ? 'CLOCK' : 'STOPWATCH' }</p>
        </div>
        <Switch>
          <Route
            path='/timer'
            render={ (props) => <Timer {...props} setPath={ setPath } /> } />
          <Route
            exact path='/'
            render={ (props) => <Clock {...props} setPath={ setPath } /> } />
        </Switch>
      </div>
    </main>
  );
};

export default ClockTimer;
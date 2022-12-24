import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import Clock from '../pages/Clock';
import Timer from '../pages/Timer';
import '../styles/Clock.css';
import { functionRoute } from '../services';

function ClockTimer() {
  const { location: { pathname }, push } = useHistory();
  const [path, setPath] = useState(pathname);

  return (
    <main>
      <button
        className='btn-route'
        onClick={ () => functionRoute(push, path, setPath) }
      >
        { path === '/' ? 'STOPWATCH' : 'CLOCK' }
      </button>
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
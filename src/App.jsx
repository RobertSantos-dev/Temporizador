import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Clock from './pages/Clock';
import Timer from './pages/Timer';
import Header from './components/Header';
import './styles/App.css';

function App() {
  return (
    <section className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={ Clock } />
        <Route path='/timer' component={ Timer } />
      </Switch>
    </section>
  );
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ClockTimer from './components/ClockTimer';
import Header from './components/Header';
import './styles/App.css';

function App() {
  return (
    <section className='App'>
      <Header />
      <ClockTimer />
    </section>
  );
}

export default App;

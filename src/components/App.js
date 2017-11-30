import React from 'react';

import LinksWidget from './LinksWidget';
import WeatherWidget from './WeatherWidget';
import ClockWidget from './ClockWidget';
import OptionsWidget from './OptionsWidget';
import NoteWidget from './NoteWidget';
import TodoWidget from './TodoWidget';
import BackgroundWidget from './BackgroundWidget';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <LinksWidget/>
      <WeatherWidget/>
      <ClockWidget/>
      <OptionsWidget/>
      <NoteWidget/>
      <TodoWidget/>
      <BackgroundWidget/>
    </div>
  );
};

export default App;

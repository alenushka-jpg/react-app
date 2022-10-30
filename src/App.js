import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './Navigation';
import News from './News';

const App = () => {
  return (
    <div className="App Container">
      <Header />
      <Navigation />
      <News />
    </div>
  );
}

export default App;

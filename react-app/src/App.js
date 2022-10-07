import React from 'react';
import './App.css';
import Header from './Header';
import Navigation from './Navigation';
import Profile from './Profile';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Profile />
    </div>
  );
}

export default App;

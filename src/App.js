import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import News from './components/News/News';
import MyFriends from './components/MyFriends/MyFriends';

const App = () => {
  return (
    <div className="App Container">
      <Header />
      <Navigation />
      <News />
      <MyFriends />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
// import MyFriends from './components/MyFriends/MyFriends';

const App = () => {
  return (
    <div className="App Container">
      <Header />
      <Navigation />
      <News />
      <Profile />
      {/* <MyFriends /> */}
    </div>
  );
}

export default App;

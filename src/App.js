import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import MyFriends from './components/MyFriends/MyFriends';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app container">
        <Header />
        <Navigation />
        <div className='app__container'>
          <Routes>
            <Route path='*' element={<Profile />} />
            <Route path='/friends' element={<MyFriends />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import News from './components/News/News'
import Messages from './components/Messages/Messages';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app container">
        <Header />
        <Navigation />
        <div className='app__container'>
          <Routes>
            <Route path='/profile/*' element={<Profile />} />
            <Route path='/news/*' element={<News />} />
            <Route path='/dialogs/*' element={<Messages />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

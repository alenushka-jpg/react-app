import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import NewsFeed from './components/NewsFeed/NewsFeed';
import Messages from './components/Messages/Messages';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app container">
        <Header />
        <Navigation 
          navLinkTitles={props.navLinkTitles}
          navLinkSvg={props.navLinkSvg}/>
        <div className='app__container'>
          <Routes>
            <Route path='/profile/*' element={<Profile />} />
            <Route path='/newsfeed/*' element={<NewsFeed 
              friendsNames={props.friendsNames}/>} />
            <Route path='/messages/*' element={<Messages 
              userNames={props.userNames}
              dialogs={props.dialogs}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;

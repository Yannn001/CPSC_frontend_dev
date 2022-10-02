import React from 'react';
import './App.css';
import Signup from './pages/signup/Signup'
import Signin from './pages/signin/Signin'
import ChatRoom from './pages/chatroom/ChatRoom';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/NewHome/Home'
import Calender from './pages/NewHome/Calender'
import Popup from './pages/popup/Popup';



 function App() {
  return (
    // <div className="App">
    <div>
        <Routes>
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Signin" element={<Signin/>} />
          <Route path="/Chat" element={<ChatRoom/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/test" element={<Calender/>} />
        </Routes>
    </div>
  );
}

export default App;


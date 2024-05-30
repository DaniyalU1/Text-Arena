import React from 'react';
import './App.css';
import DisplayData from './Components/DisplayData';
import Home from './Components/Home';
import AllPosts from './Components/AllPosts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {UserProvider} from "./Context/UserContext"
import Apipage from './Components/ApiPage';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/display" element={<DisplayData />} />
          <Route path="/all-posts" element={<AllPosts />} />
          <Route path="/all-api" element={<Apipage/>}/>
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;

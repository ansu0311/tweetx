import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Page/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Page/Signup/Signup';
import Home from './Page/Home/Home';

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [loggedin, setLoggedIn] = useState(true);

  function setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.style.setProperty('--backgroundColor', '#121212');
      document.documentElement.style.setProperty('--textColor', '#F9F9F9');
      document.documentElement.style.setProperty('--buttonColor', '#e42548');
      document.documentElement.style.setProperty('--placeColor', '#3d3d3d');
      document.documentElement.style.setProperty('--linkColor', '#686868');
    }
    else{
      document.documentElement.style.setProperty('--backgroundColor', '#ffffff');
      document.documentElement.style.setProperty('--textColor', '#5D676E');
      document.documentElement.style.setProperty('--buttonColor', '#FF748D');
      document.documentElement.style.setProperty('--placeColor', '#e0e0e0');
      document.documentElement.style.setProperty('--linkColor', '#c2c2c2');
    }
  }

  useEffect(() => {
    if (darkMode) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home toggleDarkMode={toggleDarkMode} loggedin={loggedin}/>}/>
        <Route path="/login" element={<Login darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>}/>
        <Route path="/signup" element={<Signup darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Themes from './components/Themes';
import Loading from './components/Loading';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay time as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-zinc-950 text-white">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/themes" element={<Themes />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

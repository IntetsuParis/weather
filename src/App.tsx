import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './pages/Home/Home';
import MonthStatistics from './pages/MonthStatistics/MonthStatistics';
import Header from './shared/Header/Header';
import PopUp from './shared/PopUp/PopUp';
function App() {
  return (
    <div className="global-container">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/weather" element={<Home />}></Route>
          <Route path="/month-statistics" element={<MonthStatistics />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

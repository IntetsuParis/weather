import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './pages/Home/Home';
import MonthStatistics from './pages/MonthStatistics/MonthStatistics';
import Header from './shared/Header/Header';
import PopUp from './shared/PopUp/PopUp';
function App() {
  return (
    <div className="global-container">
      {/* <PopUp /> */}
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/MonthStatistics" element={<MonthStatistics />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

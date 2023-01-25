import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RulesPage } from './pages/RulesPage/RulesPage';
import { MainPage } from './pages/MainPage/MainPage'; 
import { ContestPage } from './pages/ContestPage/ContestPage';

export const App = () => {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="creative.ct/" element={<MainPage/>}/>
        <Route path="/rules" element={<RulesPage/>}/>
        <Route path="/contests" element={<ContestPage/>}/>
      </Routes>
    </BrowserRouter>

  </>
)}

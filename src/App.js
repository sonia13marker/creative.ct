import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RulesPage } from './pages/RulesPage/RulesPage';
import { MainPage } from './pages/MainPage/MainPage'; 

export const App = () => {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="creative.ct/" element={<MainPage/>}/>
        <Route path="/rules" element={<RulesPage/>}/>
      </Routes>
    </BrowserRouter>

  </>
)}

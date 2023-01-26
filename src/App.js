import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RulesPage } from './pages/RulesPage/RulesPage';
import { MainPage } from './pages/MainPage/MainPage'; 
import { ContestPage } from './pages/ContestPage/ContestPage';
import infos from './constants/mock.json';

export const App = () => {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="creative.ct/" element={<MainPage/>}/>
        <Route path="/rules" element={<RulesPage/>}/>
        <Route path="/contests" element={<ContestPage infos={infos}/>}/>
      </Routes>
    </BrowserRouter>

  </>
)}

import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RulesPage } from './pages/RulesPage/RulesPage';
import { MainPage } from './pages/MainPage/MainPage'; 
import { ContestPage } from './pages/ContestPage/ContestPage';
import infos from './constants/mock.json';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { SubmitRequestPage } from './pages/SubmitRequestPage/SubmitRequestPage';

export const App = () => {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="creative.ct/" element={<MainPage/>}/>
        <Route path="/rules" element={<RulesPage/>}/>
        <Route path="/contests" element={<ContestPage infos={infos}/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/submit" element={<SubmitRequestPage/>}/>
      </Routes>
    </BrowserRouter>

  </>
)}

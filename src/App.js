import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RulesPage } from './pages/RulesPage/RulesPage';
import { MainPage } from './pages/MainPage/MainPage'; 
import { ContestPage } from './pages/ContestPage/ContestPage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { SubmitRequestPage } from './pages/SubmitRequestPage/SubmitRequestPage';
import { VotePage } from './pages/VotePage/VotePage';
import { WaitingVotePage } from './pages/WaitingVotePage/WaitingVotePage';
import { ResultsPage } from './pages/ResultsPage/ResultsPage';

export const App = () => {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="creative.ct/" element={<MainPage/>}/>
        <Route path="/rules" element={<RulesPage/>}/>
        <Route path="/contests" element={<ContestPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/submit" element={<SubmitRequestPage/>}/>
        <Route path="/vote" element={<VotePage/>}/>
        <Route path="/waiting-vote" element={<WaitingVotePage/>}/>
        <Route path="/results" element={<ResultsPage/>}/>
      </Routes>
    </BrowserRouter>

  </>
)}

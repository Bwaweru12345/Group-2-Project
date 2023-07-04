import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bills from './components/Bills';
import GraphicalAnalysis from './components/Graphical analysis ';
import Login from './components/Login';
import Income from './components/Income';
import Savings from './components/Savings';
import Wallet from './components/My Wallet';
import Transactions from './components/Transactions';
import PersonalUse from './components/Personal Use';
import LandingPage from './components/Landingpage';

function App() {
  return (
   
      <div>
        <LandingPage />

        <Routes>
          <Route path="/bills" element={<Bills />} />
          <Route path="/graph" element={<GraphicalAnalysis />} />
          <Route path="/income" element={<Income />} />
          <Route path="/savings" element={<Savings />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/usage" element={<PersonalUse />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    
  );
}

export default App;

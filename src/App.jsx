import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bills from './components/Bills';
import GraphicalAnalysis from './components/Graphical analysis ';
import Login from './components/Login';
import Income from './components/Income';
import Savings from './components/Savings';
import Wallet from './components/My Wallet';
import Transactions from './components/Transactions';
import Personal from './components/Personal';
import LandingPage from './components/Landingpage';
import Footer from './components/Footer';


function App() {
  return (
   
      <div className='body'>
        <LandingPage />

        <Routes>
          <Route path="/bills" element={<Bills />} />
          <Route path="/graph" element={<GraphicalAnalysis />} />
          <Route path="/income" element={<Income />} />
          <Route path="/savings" element={<Savings />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/usage" element={<Personal />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    
  );
}

export default App;

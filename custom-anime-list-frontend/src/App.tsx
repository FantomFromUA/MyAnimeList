import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Router from './pages/touter';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Router />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

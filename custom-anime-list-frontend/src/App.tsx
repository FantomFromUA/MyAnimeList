import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Router from './pages/touter';
import Header from './components/header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Router />
    </BrowserRouter>
  );
}

export default App;

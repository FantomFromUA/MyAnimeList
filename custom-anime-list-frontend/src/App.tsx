import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Router from './pages/touter';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div style={{minHeight: "100vh", display: "flex", flexDirection: "column"}}>
        <Header />
        <div style={{flex: 1}}>
          <Router />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

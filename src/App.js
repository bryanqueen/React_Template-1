import React from 'react'
// import './App.css';
import IndexPage from './components/indexPage';
import DescriptionPage from './components/DescriptionPage';
// import LoginPage from './components/LoginPage';
// import RegisterPage from './components/Register';
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
  <div className='container'>
  <Routes>
  <Route path="/" element={<IndexPage />} />
  <Route path="/Description" element={<DescriptionPage />} />
  {/* <Route path="/Login" element={<LoginPage />} /> */}
 
  </Routes>
  </div>
  );
}

export default App;

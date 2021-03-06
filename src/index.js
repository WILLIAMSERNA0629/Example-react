import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/pages/App.jsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './components/pages/Store/Store';
import Contact from './components/pages/Contact/Contact'
import Navbar from './components/organisms/Navbar/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>   
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/store' element={<Store/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CountriesList from './components/CountriesList';
import CountryCard from './components/CountryCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <CountriesList /> } />
        <Route path='/country/:id' element={ <CountryCard /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


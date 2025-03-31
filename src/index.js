import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import GuestList from './components/GuestList/GuestList';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/guestlist1234" element={<GuestList />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
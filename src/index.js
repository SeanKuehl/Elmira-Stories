import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';


import HomePage from './Pages/HomePage'
import UniversalPageHeader from './Components/UniversalHeader'


import reportWebVitals from './reportWebVitals';

/*
the additional paths add onto the base so '/blogs' etc
the asterisk means it's a catch all, like a default case in a switch statement
<Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
*/


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UniversalPageHeader />}>
          <Route index element={<HomePage />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';


import HomePage from './Pages/HomePage'

import MemorialTreeSearchPage from './Pages/MemorialTreeSearchPage';

//this one is without the header for use on the Elmira Lions website
import SeperateMemorialTreeSearchPage from './Pages/SeperateMemorialTreeSearchPage';

import ContactPage from './Pages/ContactPage'
import StoriesMainPage from './Pages/StoriesPage'

//stories
import BandStandStory from './Stories/BandStand'
import CarlKlinckStory from './Stories/CarlKlinck'

import UniversalPageHeader from './Components/UniversalHeader'



//don't deploy with this!
import AddMemorialTree from './Pages/AddMemorialTree'


import reportWebVitals from './reportWebVitals';





export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UniversalPageHeader />}>
          <Route index element={<HomePage />} />
          <Route path="memorialtrees" element={<MemorialTreeSearchPage />} />
          
          <Route path="contact" element={<ContactPage />} />

          <Route path="stories" element={<StoriesMainPage />} />

          <Route path="stories/bandstand" element={<BandStandStory />} />
          <Route path="stories/carlklinck" element={<CarlKlinckStory />} />
          
        </Route>
          <Route path="/elmira-lions-memorial-tree-search" element={<SeperateMemorialTreeSearchPage />}>
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

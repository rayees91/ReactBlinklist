import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage/LandingPage'
import EntrepreneurPage from './Pages/EntrepreneurPage/EntrepreneurPage'
import BookDetailPage from './Pages/BookDetailPage/BookDetailPage'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        
        <Route path="/entrepreneur" element={<EntrepreneurPage/>}/>
        <Route path="/BookDetailPage" element={<BookDetailPage/>}/>
      
      </Routes>
    </Router>
  );
} 
export default App;
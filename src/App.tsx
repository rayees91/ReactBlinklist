import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MyLibrary from './Pages/MyLibrary/MyLibrary'
import EntrepreneurPage from './Pages/EntrepreneurPage/EntrepreneurPage'
import BookDetailPage from './Pages/BookDetailPage/BookDetailPage'
import LandingPage from './Pages/LandingPage/LandingPage';
import { useAuth0 } from '@auth0/auth0-react';
import Test from "./Test"
function App() {
  const Authenticated = useAuth0().isAuthenticated;
  return (
    // <>{Authenticated && <Test/>}</>
    <Router>
          <Routes>
            <Route path="/" element={<MyLibrary/>}/>
            <Route path="/entrepreneur" element={<EntrepreneurPage/>}/>
            <Route path="/BookDetailPage" element={<BookDetailPage/>}/>
          </Routes>
    </Router>
  );
} 
export default App;
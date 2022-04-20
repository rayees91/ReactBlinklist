import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MyLibrary from './Pages/MyLibrary/MyLibrary'
import EntrepreneurPage from './Pages/EntrepreneurPage/EntrepreneurPage'
import BookDetailPage from './Pages/BookDetailPage/BookDetailPage'
import LandingPage from './Pages/LandingPage/LandingPage';
const Test = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<LandingPage/>}/>
        <Route path="/library" element={<MyLibrary/>}/> */}
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/entrepreneur" element={<EntrepreneurPage/>}/>
        <Route path="/BookDetailPage" element={<BookDetailPage/>}/>
      </Routes>
    </Router>
  )
}

export default Test
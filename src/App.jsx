import { useEffect, useState } from 'react';
import { Link, Routes, Router, Route, useParams } from "react-router-dom";
import axios  from 'axios';
import IssuePage from './IssuePage';
import HomePage from './HomePage';
import Header from './Header';
import Footer from './Footer'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/issue/:issueId" element={<IssuePage />} />
      </Routes>
      <Footer />
    </>  
  )
}

export default App

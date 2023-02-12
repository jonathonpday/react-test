import { useEffect, useState } from 'react';
import { Link, Routes, Router, Route, useParams } from "react-router-dom";
import axios  from 'axios';
import IssuePage from './IssuePage';
import HomePage
 from './HomePage';
 
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/issue/:issueId" element={<IssuePage />} />
      </Routes>
    </>  
  )
}

export default App

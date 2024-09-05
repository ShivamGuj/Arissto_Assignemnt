import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './components/searchPage.js';
import SavedPaperPage from './components/savedPaperPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/saved-papers" element={<SavedPaperPage />} />
      </Routes>
    </Router>
  );
};

export default App;

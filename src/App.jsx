import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import PublicationsPage from './pages/PublicationsPage';

function App() {
  return (
      <Routes>
        <Route path='/publications-page' element={ <PublicationsPage /> }/>
      </Routes>
  );
}

export default App;

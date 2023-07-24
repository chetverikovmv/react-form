import React from 'react';
import { Route, Routes } from "react-router-dom"
import { MainPage } from './pages/MainPage';
import { CreatePage } from './pages/CreatePage';

function App() {
  return (

    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/create' element={<CreatePage />} />
    </Routes>
  );
}

export default App;

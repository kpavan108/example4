import './App.css';

import React from 'react'
import ProductCategery from './Components/ProductCategery';
import SelectProductById from './Components/SelectProductById';
import { Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ProductCategery />} />
        <Route path='/selectProduct' element={<SelectProductById />} />
      </Routes>
      
    </div>
  )
}

export default App
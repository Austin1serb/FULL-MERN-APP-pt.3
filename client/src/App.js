import React from 'react';
import Main from './views/Main';
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import ProductList from './components/ProductList';
import Details from './views/Details';
import Update from './views/Update';
function App() {
  return (

    <div className="App">
      <nav>
        <Link  to={'/'}>Home</Link>
      </nav>
      
      <Routes>
        <Route path='/' element={<Main/>} ></Route>
        <Route path='/products/:id' element={<Details/>} ></Route>
        <Route path='/products/:id/edit' element={<Update/>} ></Route>
      </Routes>
    </div>
  );
}
export default App;

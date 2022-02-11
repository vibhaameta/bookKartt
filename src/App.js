import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
const LoginPage = lazy(() => import('./components/LoginPage'));
const Search = lazy(() => import('./components/Search'));
const Cart = lazy(() => import('./components/Cart'));
function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route exact path='/' element={<LoginPage/>}/>
        <Route exact path='/search' element={<Search/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
      </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

import './App.css';
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Support from './pages/Support';
import Pagenotfound from './pages/Pagenotfound';
import Cart from './pages/Cart';
import Categories from './pages/Categories';
import Register from './Auth/Register';
import Login from './Auth/Login';




function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/support' element={<Support />} />
        
        <Route path='/cart' element={<Cart />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        <Route path='*' element={<Pagenotfound />} />
      </Routes>



    </>

  );
}

export default App;

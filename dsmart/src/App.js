import './App.css';
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Support from './pages/Support';
import Pagenotfound from './pages/Pagenotfound';
import Cart from './pages/Cart';
import Categories from './pages/Categories';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Dashboard from './pages/user/Dashboard'
import PrivateRoute from './components/Routes/Private';
import ForgotPassword from './pages/ForgotPassword';
import AdminRoute from './components/Routes/AdminRoute';
import AdminDashboard from './pages/Admin/AdminDashboard'
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import Users from './pages/Admin/Users';
import Profile from './pages/user/Profile';
import Orders from './pages/user/Orders';
import Products from './pages/Admin/Products';
import UpdateProduct from './pages/Admin/UpdateProduct';
import SearchPage from './pages/SearchPage';




function App() {
  return (
    <>
      <Routes>
        {/* User Routes */}
        <Route path='/dashboard' element={<PrivateRoute />}>
          <Route path='/dashboard/user' element={<Dashboard />} />
          <Route path='/dashboard/user/profile' element={<Profile />} />
          <Route path='/dashboard/user/orders' element={<Orders />} />
        </Route>

        {/* Admin Route */}

        <Route path='/dashboard' element={<AdminRoute />}>

          <Route path='/dashboard/admin' element={<AdminDashboard />} />
          <Route path='/dashboard/admin/create-category' element={<CreateCategory />} />
          <Route path='/dashboard/admin/create-product' element={<CreateProduct />} />
          <Route path='/dashboard/admin/product/:slug' element={<UpdateProduct />} />
          <Route path='/dashboard/admin/products' element={<Products />} />
          <Route path='/dashboard/admin/users' element={<Users />} />

        </Route>



        <Route path='/' element={<HomePage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/support' element={<Support />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
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

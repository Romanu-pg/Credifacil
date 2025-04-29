import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./store/actions/products-actions";
import { AnimatePresence } from "framer-motion";

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from './pages/NotFound';
import Calculator from './pages/Calculator';
import MainNavigation from "./layout/MainNavigation";
import Footer from "./layout/Footer";
import Dashboard from "./pages/dashboard/Dashboard";
import TheProducts from "./components/dashboard/TheProducts";
import AddProduct from "./components/dashboard/AddProduct";
import UpdateProducts from "./components/dashboard/UpdateProducts";
import ProductUpdate from "./components/dashboard/ProductUpdate";

import LoginRedirect from "./components/auth/LoginRedirect";
import RegisterRedirect from "./components/auth/RegisterRedirect";
import DashboardRedirect from "./components/auth/DashboardRedirect";
import HomeRedirect from "./components/auth/HomeRedirect";
import Stadistics from "./pages/stadistics";

import UserDashboard from "./pages/user/dashboard/Dashboard";
import RoutesUser from "./pages/user/RoutesUser";





const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const isUser = useSelector((state) => state.auth.isUser);
  // const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);


  return (
    <>
      {!isAdmin && <MainNavigation />}
      <AnimatePresence exitBeforeEnter >

        <Routes location={location} key={location.pathname}>

          <Route element={<HomeRedirect />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/stadistics" element={<Stadistics />} />
          </Route>

          <Route element={<LoginRedirect />}>
            <Route path="/login" element={<Login />} />
          </Route>

          <Route element={<RegisterRedirect />}>
            <Route path="/register" element={<Register />} />
          </Route>

          <Route element={<DashboardRedirect />}>
            <Route path="admin/dashboard" element={<Dashboard />}>
              <Route path="products" element={<TheProducts />} />
              <Route path="addproduct" element={<AddProduct />} />
              <Route path="routesUser" element={<RoutesUser/>} />
              <Route path="updateproducts">
                <Route index element={<UpdateProducts />} />
                <Route path=":productId" element={<ProductUpdate />} />
              </Route>
            </Route>
          </Route>

          <Route element={<DashboardRedirect />}>
            <Route path="user/dashboard" element={<UserDashboard />}>
            </Route>
            <Route path="user/dashboard/routesUser" element={<RoutesUser/>} />
          </Route>

          <Route path="*" element={<NotFound />} />

        </Routes>

      </AnimatePresence>
      {!isAdmin && <Footer />}
    </>
  );
}

export default App;

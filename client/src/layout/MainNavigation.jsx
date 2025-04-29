import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { XIcon } from "@heroicons/react/solid";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";

import HambergurMenu from "../assets/HambergurMenu.svg";
import Logo from '../assets/images/ECO-1.png';
import NavCartButton from "../components/cart/NavCartButton";
import { logout } from "../store/actions/auth-actions";

import '../assets/css/buttons.css'

const MainNavigation = () => {
  const [showNav, setShowNav] = useState(false);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const token = useSelector((state) => state.auth.token);

  const navHandler = () => {
    setShowNav(!showNav);
  };

  const logoutUser = () => {
    dispatch(logout(token));
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 2px #ffffff",
      boxShadow: "0px 0px 4px #243E8B",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="w-full h-[70px]">
      <div className="flex  justify-between items-center w-full h-full px-8 sm:mb-6">
        <div className="flex">
          <div className="flex items-center">
            <motion.div
              className="w-[70px] h-[70px]"
              drag
              dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
              dragElastic={0.4}
            >
              <NavLink to='/'><img src={Logo} alt="" /></NavLink>
            </motion.div>
            <motion.div
              initial={{ y: -250 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
            >
            </motion.div>
          </div>
          <div className="hidden md:flex items-center lg:ml-8">
            <li>
              {isAuthenticated && (
                <NavLink
                  className="ml-4 p-2 text-green-800 lg:text-lg font-semibold underline-black-on-hover"
                  to="/user/dashboard"
                >
                  Dashboard
                </NavLink>
              )}
            </li>
            <li>
              {isAuthenticated && (
                <NavLink to="/user/dashboard/routesUser"
                  className="ml-4 p-2 text-green-800 lg:text-lg font-semibold underline-black-on-hover"
                >
                  Mis rutas
                </NavLink>
              )}
            </li>
            <li>
              {!isAuthenticated && (
                <NavLink
                  className="ml-4 p-2 text-green-800 lg:text-lg font-semibold underline-black-on-hover"
                  to="/"
                >
                  Inicio
                </NavLink>
              )}
            </li>
            <li>
              {!isAuthenticated && (
                <NavLink
                  className="ml-2 p-2 text-green-800 lg:text-lg font-semibold underline-black-on-hover"
                  to="/about"
                >
                  Nosotros
                </NavLink>
              )}
            </li>
            <li>
              <NavLink
                className="ml-2 p-2 text-green-800 lg:text-lg font-semibold underline-black-on-hover"
                to="/products"
              >
                Productos
              </NavLink>
            </li>
            <li>
              <NavLink
                className="ml-2 p-2 text-green-800 lg:text-lg font-semibold underline-black-on-hover"
                to="/calculator"
              >
                Calculadora
              </NavLink>
              <NavLink
                className="ml-2 p-2 text-green-800 lg:text-lg font-semibold underline-black-on-hover"
                to="/stadistics"
              >
                Estadísticas
              </NavLink>
            </li>
          </div>
        </div>
        <div className="hidden md:flex">
          <NavCartButton />
          {!isAuthenticated && (
            <NavLink to="/login">
              <motion.button className="border-black-light text-primary font-bold px-4 py-2 ml-2 rounded-full shadow-lg"
                variants={buttonVariants}
                whileHover="hover"
              >
                Login
              </motion.button>
            </NavLink>
          )}
          {isAuthenticated && (
            <motion.button
              onClick={logoutUser}
              className="border-primary border-4 text-primary font-bold px-4 py-2 ml-2 rounded-full shadow-lg"
              variants={buttonVariants}
              whileHover="hover"
            >
              Logout
            </motion.button>
          )}
        </div>
        <div className="md:hidden cursor-pointer" onClick={navHandler}>
          {!showNav ? (
            <img src={HambergurMenu} alt="" />
          ) : (
            <XIcon className="w-5" />
          )}
        </div>
      </div>

      <ul
        className={
          !showNav
            ? "hidden"
            : "md:hidden px-8 py-4 bg-white w-full h-[20rem] relative z-20"
        }
      >
        <li className="border-b-2 border-zinc-300 w-full text-lg font-semibold text-gray-600">
          <NavLink to="/" onClick={navHandler}>
            Homeee
          </NavLink>
        </li>
        <li className="border-b-2 border-zinc-300 w-full mt-4 text-lg font-semibold text-gray-600">
          <NavLink to="/about" onClick={navHandler}>
            About
          </NavLink>
        </li>
        <li className="border-b-2 border-zinc-300 w-full mt-4 text-lg font-semibold text-gray-600">
          <NavLink to="/products" onClick={navHandler}>
            Products
          </NavLink>
        </li>
        <li className="border-b-2 border-zinc-300 w-full mt-4 text-lg font-semibold text-gray-600">
          {isAuthenticated && (
            <NavLink to="/checkout" onClick={navHandler}>
              Checkout
            </NavLink>
          )}
        </li>
        <div className="flex flex-col items-center m-4 space-y-4">
          <div onClick={navHandler}>
            <NavCartButton />
          </div>
          {!isAuthenticated && (
            <NavLink
              onClick={navHandler}
              to="/login"
              className="border-primary border-4 text-primary font-bold px-9 py-2 ml-2 rounded-full shadow-lg"
            >
              Login
            </NavLink>
          )}
          {isAuthenticated && (
            <button
              onClick={logoutUser}
              className="border-primary border-4 text-primary font-bold px-9 py-2 ml-2 rounded-full shadow-lg"
            >
              Logout
            </button>
          )}
        </div>
      </ul>
    </div>
  );
};

export default MainNavigation;

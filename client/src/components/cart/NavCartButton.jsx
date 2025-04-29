import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import CartIcon from "./CartIcon";

const NavCartButton = () => {
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);

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
        <motion.button className='border-black-light rounded-3xl font-bold py-2 px-3 bg-green-500 shadow-lg text-white'
            variants={buttonVariants}
            whileHover="hover"
        >
            <Link to="/cart" className="flex items-center">
                {/* Icono */}
                <span className="flex w-4 h-4 mr-2 items-center justify-center">
                    <CartIcon />
                </span>

                {/* Texto Marketplace */}
                <span className='text-white font-bold mr-2 flex items-center'>
                    Carrito
                </span>

                {/* Cantidad */}
                <span className="bg-secondary-200 text-primary rounded-full px-2 font-bold flex items-center justify-center">
                    {totalQuantity}
                </span>
            </Link>

        </motion.button>
    );
};

export default NavCartButton;
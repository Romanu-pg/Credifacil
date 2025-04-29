import React from 'react';

import { Link } from 'react-router-dom';

const PageHero = ({ title, product }) => {
    return (
        <div className='bg-white-300 w-full min-h-[10vh] flex items-center'>
            <div className='w-[85vw] mx-auto items-center flex items-center'>
                <span className='sm:text-2xl md:text-[2rem] capitalize font-bold tracking-wider'>
                    <Link className='text-primary' to="/">Home </Link>
                    {product && <Link className='text-primary' to="/products">/ Products </Link>}/ {title}
                </span>
            </div>
        </div>
    );
};

export default PageHero;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-secondary-100 to-secondary-300 px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-[10rem] md:text-[12rem] font-extrabold text-primary drop-shadow-md animate-pulse">404</h1>
        <p className="text-2xl md:text-3xl font-semibold text-primary mb-4">
          ¡Vaya! No encontramos esta página.
        </p>
        <p className="text-md md:text-lg text-primary/80 mb-8">
          La dirección que estás buscando no existe o ha sido movida.  
        </p>
        <button
          onClick={() => navigate('/', { replace: true })}
          className="bg-primary hover:bg-primary/80 text-secondary-100 font-semibold px-6 py-3 rounded-xl transition duration-300 shadow-xl"
        >
          Volver al inicio
        </button>
      </div>
    </div>
  );
};

export default Error;

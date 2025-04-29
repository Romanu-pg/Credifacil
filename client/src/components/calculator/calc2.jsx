import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Car from './car';
import Flight from './flight';

const Calculate = () => {
  const [currentView, setCurrentView] = useState('');
  const [carbonFootprint, setCarbonFootprint] = useState('0.00'); // State for carbon footprint

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="bg-green-500 text-white rounded-full p-3 mr-3">
            <i className="fas fa-leaf"></i>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Calcule la huella de carbono de sus viajes</h1>
            <p className="text-gray-600">
            Utilice nuestra calculadora de la huella de carbono para calcular las emisiones de sus viajes y comprar compensaciones de carbono.
            </p>
          </div>
        </div>
        <button className="border border-gray-300 rounded-md px-4 py-2 text-gray-600 hover:bg-gray-100">
        ¿Conoce sus toneladas métricas o el importe de su compra?{' '}
          <span className="text-green-500">Compensación por importe</span>
        </button>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="box-border h-50% w-65% p-4 border-4">
          <h2 className="text-xl font-semibold mb-4">Detalles del viaje</h2>
          <div className="flex items-center mb-4">
            <button
              onClick={() => setCurrentView('flight')}
              className={`flex-1 border rounded-md py-2 text-center mx-1 ${currentView === 'flight' ? 'bg-green-500 text-white' : 'border-gray-300 hover:bg-gray-100'}`}
            >
              Vuelo
            </button>
            <button
              onClick={() => setCurrentView('car')}
              className={`flex-1 border rounded-md py-2 text-center mx-1 ${currentView === 'car' ? 'bg-green-500 text-white' : 'border-gray-300 hover:bg-gray-100'}`}
            >
              Coche
            </button>
            <button
              onClick={() => setCurrentView('boat')}
              className={`flex-1 border rounded-md py-2 text-center mx-1 ${currentView === 'boat' ? 'bg-green-500 text-white' : 'border-gray-300 hover:bg-gray-100'}`}
            >
              Barco
            </button>
          </div>

          {/* Vista cambiante según el botón presionado */}
          {currentView === 'flight' && <Flight />}
          {currentView === 'car' && <Car setCarbonFootprint={setCarbonFootprint} />}
          {currentView === 'boat' && <p>Vista de Boat</p>}
        </div>
        <div className="box-border h-50% w-35% p-4 border-4">
          <h2 className="text-xl font-semibold mb-4">Su huella de carbono</h2>
          <div className="border border-gray-300 rounded-md p-6 flex items-center justify-center h-64">
            <i className="fas fa-cloud fa-3x text-gray-300"></i>
            <p className="text-3xl text-green-500">{carbonFootprint} kg CO₂</p>
          </div>
        </div>
      </div>
      <footer className="mt-6 text-center text-gray-500">
      Desarrollado por <span className="text-green-500">ECOPLUS</span>
      </footer>
    </div>
  );
}

ReactDOM.render(<Calculate />, document.getElementById('root'));
export default Calculate;

import React, { useState } from "react";
import vehicleData from '../../infrastructure/vehicles.json';  // Import the JSON file

const Car = ({ setCarbonFootprint }) => {
    const [selectedVehicle, setSelectedVehicle] = useState(vehicleData.vehicles[0]);
    const [distance, setDistance] = useState('');

    const handleVehicleChange = (vehicleType) => {
        const vehicle = vehicleData.vehicles.find(v => v.vehicle_type === vehicleType);
        setSelectedVehicle(vehicle);
    };

    const handleDistanceChange = (value) => {
        if (!isNaN(value)) {
            setDistance(value);
        }
    };

    const calculateCarbonFootprint = () => {
        if (distance && selectedVehicle.fuel_efficiency_km_l) {
            const fuelConsumed = distance / selectedVehicle.fuel_efficiency_km_l;
            const co2Emitted = fuelConsumed * selectedVehicle.co2_emission_factor_kg_co2_l;
            setCarbonFootprint(co2Emitted.toFixed(2));  // Update the carbon footprint in the parent component
        } else {
            setCarbonFootprint('0.00');
        }
    };

    return (
        <div>
            <div className="mb-4">
                <h3 className="text-lg font-medium mb-2">Seleccionar vehículo</h3>
                <div className="flex flex-wrap space-x-4 space-y-4">
                    {vehicleData.vehicles.map((vehicle, index) => (
                        <button
                            key={index}
                            className={`flex-auto grow-0 border box-border border-gray-300 rounded-md py-2 text-center mx-1 hover:bg-gray-100 ${selectedVehicle.vehicle_type === vehicle.vehicle_type ? 'bg-green-500 text-white' : ''}`}
                            onClick={() => handleVehicleChange(vehicle.vehicle_type)}
                        >
                            <p>{vehicle.vehicle_type}</p>
                        </button>
                    ))}
                </div>
            </div>
            <div className="mb-4">
                <h3 className="text-lg font-medium mb-2">Distancia recorrida</h3>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md py-2 px-3"
                    placeholder="Enter Distance"
                    value={distance}
                    onChange={(e) => handleDistanceChange(e.target.value)}
                />
            </div>
            <button className="w-full bg-green-500 text-white rounded-md py-2" onClick={calculateCarbonFootprint}>
            Calcular la huella de carbono
            </button>
        </div>
    );
};

export default Car;

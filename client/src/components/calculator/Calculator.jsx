import { useState } from 'react';
import vehicleData from '../../infrastructure/vehicles.json';  // Import the JSON file
import DollarIcon from '../../assets/icon-dollar.svg';
import PersonIcon from '../../assets/icon-person.svg';
import '../../assets/css/calculator/style_calculator.css';

const Calculate = () => {
    const [selectedVehicle, setSelectedVehicle] = useState(vehicleData.vehicles[0]);
    const [distance, setDistance] = useState(''); // Add state for distance
    const [carbonFootprint, setCarbonFootprint] = useState('0.00'); // State for carbon footprint

    const handleVehicleChange = (event) => {
        const selectedType = event.target.value;
        const vehicle = vehicleData.vehicles.find(v => v.vehicle_type === selectedType);
        setSelectedVehicle(vehicle);
    };

    const handleDistanceChange = (value) => {
        if (!isNaN(value)) {
            setDistance(value);
        }
    };

    // Function to calculate the carbon footprint
    const calculateCarbonFootprint = () => {
        if (distance && selectedVehicle.fuel_efficiency_km_l) {
            const fuelConsumed = distance / selectedVehicle.fuel_efficiency_km_l;
            const co2Emitted = fuelConsumed * selectedVehicle.co2_emission_factor_kg_co2_l;
            setCarbonFootprint(co2Emitted.toFixed(2));  // Update state with the carbon footprint
        } else {
            setCarbonFootprint('0.00');
        }
    };

    function VehicleDropdown() {
        return (
            <div>
                <h2>Select a Vehicle</h2>
                <select value={selectedVehicle.vehicle_type} onChange={handleVehicleChange}>
                    {vehicleData.vehicles.map((vehicle, index) => (
                        <option key={index} value={vehicle.vehicle_type}>
                            {vehicle.vehicle_type} - {vehicle.fuel_type} 
                            ({vehicle.fuel_efficiency_km_l ? `${vehicle.fuel_efficiency_km_l} km/l` : 'Electric'})
                        </option>
                    ))}
                </select>
            </div>
        );
    }

    return (
        <>
            <div className="calculator-container">
                <div className="left-container">
                    <VehicleDropdown />
                    <div className="form-control-calculator">
                        <div className="input-container">
                            <input 
                                placeholder='Distance Traveled (km)'
                                className="input-calculator" 
                                onChange={(e) => handleDistanceChange(e.target.value)}
                                type="text"
                                value={distance}
                            />
                        </div>
                        <button className="reset-calculator" onClick={calculateCarbonFootprint}>
                        Calculate Carbon Footprint
                        </button>
                    </div>
                </div>
                <div className="right-container">
                    <div className="result-screen">
                        <p className="heading">Carbon Footprint</p>
                        <p className="result-calculator">
                            {carbonFootprint} kg CO₂
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Calculate;

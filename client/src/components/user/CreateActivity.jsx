import React, { useState } from "react";

const ActivityForm = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const handleDurationChange = (setter) => (e) => {
        setter(Math.max(0, parseInt(e.target.value) || 0)); // Evitar valores negativos
    };

    return (
        <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700">Title</label>
                    <input type="text" className="w-full border border-gray-300 p-2 rounded" />
                </div>
                
                <div>
                    <label className="block text-gray-700">Medio de Transporte</label>
                    <select className="w-full border border-gray-300 p-2 rounded">
                        <option value="Bicycle">Bicicleta</option>
                        <option value="Car">Carro</option>
                        <option value="Motorcycle">Motocicleta</option>
                        <option value="Bus">Autobús</option>
                        <option value="Train">Tren</option>
                        <option value="Walk">Caminar</option>
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700">Date & Time</label>
                    <input type="text" className="w-full border border-gray-300 p-2 rounded" placeholder="mm/dd/yyyy" />
                </div>

                <div>
                    <label className="block text-gray-700">Duración</label>
                    <div className="flex space-x-2">
                        <input
                            type="number"
                            className="w-1/3 border border-gray-300 p-2 rounded"
                            placeholder="hr"
                            value={hours}
                            onChange={handleDurationChange(setHours)}
                        />
                        <input
                            type="number"
                            className="w-1/3 border border-gray-300 p-2 rounded"
                            placeholder="min"
                            value={minutes}
                            onChange={handleDurationChange(setMinutes)}
                        />
                        <input
                            type="number"
                            className="w-1/3 border border-gray-300 p-2 rounded"
                            placeholder="sec"
                            value={seconds}
                            onChange={handleDurationChange(setSeconds)}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-gray-700">Distance</label>
                    <input type="text" className="w-full border border-gray-300 p-2 rounded" placeholder="miles" />
                </div>

                <div>
                    <label className="block text-gray-700">Elevation</label>
                    <input type="text" className="w-full border border-gray-300 p-2 rounded" placeholder="feet" />
                </div>
            </div>
            <button type="submit" className="bg-teal-700 text-white px-4 py-2 rounded">Create</button>
        </form>
    );
};

export default ActivityForm;
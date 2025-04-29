import React, { useState, useEffect } from "react";
import GPXMap from './GPXMap'; // Asegúrate de que la ruta es correcta
import routesData from '../../infrastructure/routes.json'; // Asegúrate de que la ruta es correcta

const RoutesList = () => {
    const [routes, setRoutes] = useState([]);

    useEffect(() => {
        // Simula la carga de datos desde un archivo JSON
        setRoutes(routesData);
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {routes.map(route => (
                <div key={route.id} className="border border-gray-300 rounded p-4 h">
                    <GPXMap gpxFile={route.gpxFile} />
                    <h2 className="text-lg font-bold">{route.name}</h2>
                    <p className="text-gray-700">{route.distance}</p>
                    <p className="text-gray-700">{route.elevation}</p>
                    <p className="text-gray-700">{route.time}</p>
                    <p className="text-gray-500 text-sm">{route.createdAt}</p>
                </div>
            ))}
        </div>
    );
}

export default RoutesList;

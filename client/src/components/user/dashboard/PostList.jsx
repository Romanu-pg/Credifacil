import React, { useEffect, useState } from "react";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Importa CSS de Leaflet
import 'leaflet-gpx'; // Asegúrate de que este paquete está instalado
import postsData from '../../../data/posts.json'; // Ajusta la ruta según tu estructura de carpetas
import IconStart from '../dashboard/images/marker-icon.png';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(postsData);
    }, []);

    const mapContainerStyle = {
        width: '100%',
        height: '200px',
    };

    useEffect(() => {
        // Inicializa el mapa una vez que los posts se han cargado
        posts.forEach(post => {
          console.log(post);
            var map = L.map(`map-${post.id}`, { center: [42.4624, -6.2073], zoom: 11 });
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

            const url = '/Ruta_a_Villahermosa.gpx'; // URL de tu archivo GPX

            new L.GPX(url, {
                async: true,
                marker_options: {
                    startIconUrl: {IconStart},
                    endIconUrl: {IconStart},
                },
                polyline_options: {
                    color: 'green',
                    opacity: 0.75,
                    weight: 3,
                    lineCap: 'round',
                },
            }).on('loaded', function (e) {
              
                const gpx = e.target;
                map.fitBounds(gpx.getBounds());

                // Distancia
                const distance = gpx.get_distance();
                const metros = Math.round(distance);
                document.getElementById(`dist-${post.id}`).innerHTML =  (metros/1000) + " km";
                

                // Cota inferior
                const elevation_min = gpx.get_elevation_min();
                const cota_min = Math.round(elevation_min);
                document.getElementById(`cotamin-${post.id}`).innerHTML = "Elevación mínima: " + cota_min + " m";

                // Cota superior
                const elevation_max = gpx.get_elevation_max();
                const cota_max = Math.round(elevation_max);
                document.getElementById(`cotamax-${post.id}`).innerHTML = "Elevación máxima: " + cota_max + " m";
            }).addTo(map);
        });
    }, [posts]);

    return (
        <div className="max-w-3xl mx-auto p-4">
            {posts.map(post => (
                <div key={post.id} className="bg-white p-6 rounded-lg shadow-md mb-6 hover:shadow-lg transition-shadow duration-200">
                    <div className="flex items-center mb-4">
                        <img src="https://placehold.co/40x40" alt="User profile" className="w-12 h-12 rounded-full mr-4 shadow-md" />
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">{post.user}</h2>
                            <p className="text-gray-500 text-sm">{post.time}</p>
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h3>
                    <div className="flex justify-between mb-4">
                        <div>
                            <span className="block text-gray-600">Distance</span>
                            <span className="block text-2xl font-bold text-gray-900" id={`dist-${post.id}`}></span>
                        </div>
                        <div>
                            <span className="block text-gray-600">Average Pace</span>
                            <span className="block text-2xl font-bold text-gray-900">{post.averagePace}</span>
                        </div>
                    </div>

                    {/* Mapa de Leaflet */}
                    <div id={`map-${post.id}`} style={mapContainerStyle}></div>
                    <div id={`cotamin-${post.id}`} className="text-gray-600 mt-2"></div>
                    <div id={`cotamax-${post.id}`} className="text-gray-600 mt-2"></div>
                </div>
            ))}
        </div>
    );
}

export default PostList;

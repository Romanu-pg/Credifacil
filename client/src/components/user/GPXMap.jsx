import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-gpx'; // Asegúrate de haber instalado leaflet-gpx

const GPXMap = ({ gpxFile }) => {
    useEffect(() => {
        const map = L.map(`map-${gpxFile}`, {
            center: [0, 0],
            zoom: 13,
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

        const gpxLayer = new L.GPX(gpxFile, {
            async: true,
            marker_options: {
                startIconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
                endIconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png',
                shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png'
            },
            polyline_options: {
                color: 'blue',
                weight: 3,
                opacity: 0.7
            }
        }).on('loaded', function(e) {
            map.fitBounds(e.target.getBounds());
        });

        gpxLayer.addTo(map);

        // Cleanup map on component unmount
        return () => {
            map.remove();
        };
    }, [gpxFile]);

    return <div id={`map-${gpxFile}`} className="w-full h-40 rounded" />;
};

export default GPXMap;

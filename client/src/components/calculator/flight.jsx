import React from 'react';
import ReactDOM from 'react-dom';


const Flight = () => {
    return (
        <div>
                <div className="flex justify-between items-center mb-6">
                </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Detalles del viaje</h2>
                        <div className="flex mb-4">
                            <label className="flex items-center mr-4">
                                <input type="radio" name="tripType" className="mr-2" defaultChecked />
                                Un viaje
                            </label>
                            <label className="flex items-center mr-4">
                                <input type="radio" name="tripType" className="mr-2" />
                                Viajes múltiples
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="tripType" className="mr-2" />
                                Carta
                            </label>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mb-4">
                            <select className="border border-gray-300 rounded-lg p-2">
                                <option>Viaje de ida y vuelta</option>
                            </select>
                            <select className="border border-gray-300 rounded-lg p-2">
                                <option>1</option>
                            </select>
                            <select className="border border-gray-300 rounded-lg p-2">
                                <option>Economía</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <input type="text" placeholder="Where From?" className="border border-gray-300 rounded-lg p-2" />
                            <input type="text" placeholder="Where To?" className="border border-gray-300 rounded-lg p-2" />
                        </div>
                    </div>
        </div>
    );
}

ReactDOM.render(<Flight />, document.getElementById('root'));
export default Flight;

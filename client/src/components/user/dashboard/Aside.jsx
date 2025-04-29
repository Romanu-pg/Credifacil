import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBus, faRunning } from '@fortawesome/free-solid-svg-icons';

const Aside = () => {
    return (
        <div className="max-w-sm mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="flex flex-col items-center">
                    <img src="https://placehold.co/80x80" alt="User profile" className="w-20 h-20 rounded-full mb-4 shadow-lg" />
                    <h2 className="text-xl font-semibold text-gray-800">Americo Zuzunaga</h2>
                    <div className="flex justify-between w-full mt-4">
                        <div className="text-center">
                            <span className="block text-gray-600">Rides</span>
                            <span className="block text-2xl font-bold text-gray-900">6</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-gray-600">Runs</span>
                            <span className="block text-2xl font-bold text-gray-900">6</span>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <h3 className="text-gray-700 font-medium">Latest Activity</h3>
                    <p className="text-gray-500">Morning Run • Today at 12:34 PM</p>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-center text-gray-800">THIS WEEK</h3>
                <div className="flex justify-between mt-4">
                    <div className="text-center">
                        <FontAwesomeIcon icon={faBus} className="text-3xl text-gray-700 mb-2" />
                        <p className="text-gray-800 text-xl">0.00 mi</p>
                        <p className="text-gray-500">0s</p>
                        <p className="text-gray-500">0 ft</p>
                    </div>
                    <div className="text-center">
                        <FontAwesomeIcon icon={faRunning} className="text-3xl text-gray-700 mb-2" />
                        <p className="text-gray-800 text-xl">3.18 mi</p>
                        <p className="text-gray-500">0h 24m</p>
                        <p className="text-gray-500">349 ft</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aside;

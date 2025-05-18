import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const users = [1, 2, 3];

const Partners = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12 tracking-widest">ASOCIADOS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {users.map((user, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border">
              <div className="flex items-center mb-4">
                <FaUserCircle className="text-3xl text-gray-500 mr-2" />
                <h3 className="text-lg font-semibold">User</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum tempus diam, ultricies sollicitudin erat facilisis eget.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

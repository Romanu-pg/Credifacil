import React from 'react';

const InterestRates = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl font-bold mb-6">Tasas de interés</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum tempus diam, ultricies sollicitudin erat facilisis eget.
            </p>
            <p className="text-gray-600">
              Vestibulum rhoncus dui vel eros laoreet consectetur. Vivamus eget elementum ligula, vitae pharetra quam.
            </p>
          </div>
          <div>
            <div className="flex items-end h-40 space-x-2">
              {[60, 90, 50, 75, 100, 80].map((height, idx) => (
                <div
                  key={idx}
                  className="w-8 bg-blue-500 rounded"
                  style={{ height: `${height}%` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestRates;

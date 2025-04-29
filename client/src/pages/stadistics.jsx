import React from 'react';
import { motion } from 'framer-motion';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import 'tailwindcss/tailwind.css';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { x: '-100vw', transition: { ease: 'easeInOut' } }
};

// Datos para las gráficas
const barChartData = {
  labels: ['26.09', '25.09', '24.09', '23.09', '20.09', '19.09'],
  datasets: [
    {
      label: 'Cierre',
      data: [66, 65.24, 63.87, 64.1, 63.39, 62.82],
      backgroundColor: '#4C51BF',
    },
    {
      label: 'Apertura',
      data: [65.25, 64.28, 64.21, 63.7, 63.5, 63.93],
      backgroundColor: '#9F7AEA',
    }
  ]
};

const volumeChartData = {
  labels: ['26.09', '25.09', '24.09', '23.09', '20.09', '19.09'],
  datasets: [
    {
      label: 'Volumen',
      data: [27030, 33930, 30760, 27180, 24410, 49400],
      backgroundColor: '#ED64A6',
    }
  ]
};

const barChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Cierre y Apertura'
    }
  }
};

const volumeChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Volumen de operaciones'
    }
  }
};

// Componente principal
const Stadistics = () => {
  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex flex-col min-h-screen p-8 bg-gray-100"
    >
      <h1 className="text-3xl font-bold mb-4">Histórico de emisiones de carbono (México)</h1>
      <div className="flex justify-between">
        {/* Tabla */}
        <div className="flex-grow mr-8">
          <div className="overflow-x-auto">
            <table className="table-auto border-collapse border border-gray-300 w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">Fecha</th>
                  <th className="border border-gray-300 px-4 py-2">Cierre</th>
                  <th className="border border-gray-300 px-4 py-2">Apertura</th>
                  <th className="border border-gray-300 px-4 py-2">Máximo</th>
                  <th className="border border-gray-300 px-4 py-2">Mínimo</th>
                  <th className="border border-gray-300 px-4 py-2">Vol.</th>
                  <th className="border border-gray-300 px-4 py-2">% var.</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["26.09.2024", "66.00", "65.25", "66.73", "64.35", "27.03K", "1.16%"],
                  ["25.09.2024", "65.24", "64.28", "65.59", "63.65", "33.93K", "2.14%"],
                  ["24.09.2024", "63.87", "64.21", "64.93", "63.53", "30.76K", "-0.36%"],
                  ["23.09.2024", "64.10", "63.70", "64.72", "63.34", "27.18K", "1.12%"],
                  ["20.09.2024", "63.39", "63.50", "64.15", "62.88", "24.41K", "0.91%"],
                  ["19.09.2024", "62.82", "63.93", "65.42", "62.39", "49.40K", "-1.38%"],
                  ["18.09.2024", "63.70", "64.49", "64.88", "63.21", "22.57K", "-0.99%"],
                  ["17.09.2024", "64.34", "63.20", "65.16", "62.45", "33.43K", "1.79%"],
                  ["16.09.2024", "63.21", "64.85", "64.97", "63.15", "-2.74%"],
                  ["13.09.2024", "64.99", "65.25", "65.94", "64.60", "25.95K", "-0.70%"],
                  ["12.09.2024", "65.45", "66.08", "66.43", "65.11", "24.04K", "-1.43%"],
                  ["11.09.2024", "66.40", "65.14", "66.53", "64.71", "31.44K", "2.28%"],
                  ["10.09.2024", "64.92", "66.27", "67.18", "64.76", "34.44K", "-2.41%"],
                  ["09.09.2024", "66.52", "66.50", "67.45", "66.06", "24.49K", "0.03%"],
                  ["06.09.2024", "66.50", "66.10", "67.74", "66.04", "33.39K", "0.45%"],
                  ["05.09.2024", "66.20", "66.79", "67.68", "65.95", "33.56K", "-1.19%"],
                  ["04.09.2024", "67.00", "68.10", "68.47", "66.75", "28.04K", "-1.70%"],
                  ["03.09.2024", "68.16", "70.41", "70.44", "68.10", "34.50K", "-3.22%"],
                  ["02.09.2024", "70.43", "70.03", "70.99", "69.56", "24.52K", "0.18%"],
                  ["30.08.2024", "70.30", "71.09", "71.45", "69.96", "20.56K", "-1.07%"],
                  ["29.08.2024", "71.06", "70.65", "71.23", "70.08", "20.68K", "0.41%"],
                  ["28.08.2024", "70.77", "71.51", "72.21", "70.35", "22.67K", "-1.01%"],
                  ["27.08.2024", "71.49", "70.67", "71.93", "70.24", "20.82K", "1.42%"],
                  ["26.08.2024", "70.49", "71.10", "71.75", "70.07", "17.22K", "-0.90%"]
                ].map((row, index) => (
                  <tr key={index} className="bg-white even:bg-gray-100">
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="border border-gray-300 px-4 py-2 text-center">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Gráficas */}
        <div className="w-full md:w-1/3">
          <div className="mb-8">
            <Bar data={barChartData} options={barChartOptions} />
          </div>
          <div>
            <Bar data={volumeChartData} options={volumeChartOptions} />
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Stadistics;

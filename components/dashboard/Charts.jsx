import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Charts = ({ residents, collectors, pickups }) => {
  // Prepare data for charts
  const residentRoles = residents.reduce((acc, resident) => {
    acc[resident.role] = (acc[resident.role] || 0) + 1;
    return acc;
  }, {});
  
  const collectorStatuses = collectors.reduce((acc, collector) => {
    acc[collector.status] = (acc[collector.status] || 0) + 1;
    return acc;
  }, {});
  
  const pickupStatuses = pickups.reduce((acc, pickup) => {
    acc[pickup.status] = (acc[pickup.status] || 0) + 1;
    return acc;
  }, {});

  const residentChartData = {
    labels: Object.keys(residentRoles),
    datasets: [
      {
        data: Object.values(residentRoles),
        backgroundColor: ['#3B82F6', '#10B981', '#F59E0B'],
      },
    ],
  };
  
  const collectorChartData = {
    labels: Object.keys(collectorStatuses),
    datasets: [
      {
        data: Object.values(collectorStatuses),
        backgroundColor: ['#EF4444', '#10B981', '#F59E0B'],
      },
    ],
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100">
        <h3 className="text-lg font-semibold mb-4">Residents by Role</h3>
        <div className="h-64">
          <Pie 
            data={residentChartData} 
            options={{ 
              maintainAspectRatio: false,
              plugins: {
                legend: { position: 'bottom' }
              }
            }} 
          />
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100">
        <h3 className="text-lg font-semibold mb-4">Collectors by Status</h3>
        <div className="h-64">
          <Pie 
            data={collectorChartData} 
            options={{ 
              maintainAspectRatio: false,
              plugins: {
                legend: { position: 'bottom' }
              }
            }} 
          />
        </div>
      </div>
    </>
  );
};

export default Charts;
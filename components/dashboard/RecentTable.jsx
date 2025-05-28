import React from 'react';

const RecentTable = ({ title, data, columns }) => {
  if (!data || data.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-100">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <p className="text-gray-500 text-center py-4">No data available</p>
      </div>
    );
  }

  // Helper function to get cell value
  const getValue = (item, accessor) => {
    if (typeof accessor === 'function') {
      return accessor(item);
    }
    return item[accessor] || 'N/A';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-5  border border-gray-100 w-full">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column, index) => (
                <th 
                  key={index}
                  className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                {columns.map((column, colIndex) => (
                  <td 
                    key={colIndex} 
                    className="px-4 py-3 whitespace-nowrap text-sm text-gray-500"
                  >
                    {getValue(item, column.accessor)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTable;
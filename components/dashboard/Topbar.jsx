import React from 'react';
import { FiMenu, FiBell, FiUser } from 'react-icons/fi';

const Topbar = ({ setSidebarOpen }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <button
            className="mr-4 text-gray-500 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <FiMenu size={24} />
          </button>
          <div className="text-xl font-bold text-gray-800">Dashboard</div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="relative p-1 text-gray-500 hover:text-gray-700">
            <FiBell size={20} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <FiUser size={18} />
            </div>
            <span className="ml-2 hidden md:inline text-sm font-medium">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
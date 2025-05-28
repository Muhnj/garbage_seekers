import React from 'react';
import Link from 'next/link';
import { 
  FiHome, FiUsers, FiTruck, FiCalendar, 
  FiLogOut, FiX, FiMenu 
} from 'react-icons/fi';

const Sidebar = ({ isOpen, setSidebarOpen }) => {
  const navItems = [
    { name: 'Dashboard', icon: <FiHome />, href: '#' },
    { name: 'Residents', icon: <FiUsers />, href: '#' },
    { name: 'Collectors', icon: <FiTruck />, href: '#' },
    { name: 'Pickups', icon: <FiCalendar />, href: '#' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside 
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-800 text-white transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="text-xl font-semibold">Garbage Seekers</div>
          <button 
            className="lg:hidden text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <FiX size={24} />
          </button>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-8 pt-4 border-t border-gray-700">
            <button className="flex items-center w-full p-3 rounded-lg hover:bg-gray-700 transition-colors">
              <FiLogOut className="mr-3" />
              <span>Logout</span>
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-600 mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} Garbage Seekers. All rights reserved.
          </div>
          <div className="text-sm text-gray-500">
            v1.0.0
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
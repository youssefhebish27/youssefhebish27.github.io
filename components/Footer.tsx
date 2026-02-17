import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-2">© {new Date().getFullYear()} Youssef Hebish. All rights reserved.</p>
        <p className="text-sm">Dedicated to Software Quality Excellence</p>
      </div>
    </footer>
  );
};

export default Footer;

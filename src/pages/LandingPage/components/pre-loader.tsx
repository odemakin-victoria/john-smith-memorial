import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// Loader Component
const Loader = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadComplete();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold uppercase  animate-pulse">
          John Smith Ayetere
        </h1>
      </div>
    </div>
  );
};
export default Loader;

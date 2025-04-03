
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px] w-full">
      <div className="h-12 w-12 rounded-full border-4 border-gray-200 border-t-primary animate-spin"></div>
    </div>
  );
};

export default Loader;

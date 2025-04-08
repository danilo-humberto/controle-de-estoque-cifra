import { useState } from 'react';

export const useMapData = () => {
  const [selectedState, setSelectedState] = useState(null);
  
  return { selectedState, setSelectedState };
};
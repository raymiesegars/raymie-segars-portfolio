'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface StarCanvasContextType {
  isVisible: boolean;
  toggleVisibility: () => void;
}

const StarCanvasContext = createContext<StarCanvasContextType | undefined>(undefined);

export const useStarCanvas = () => {
  const context = useContext(StarCanvasContext);
  if (context === undefined) {
    throw new Error('useStarCanvas must be used within a StarCanvasProvider');
  }
  return context;
};

interface StarCanvasProviderProps {
  children: ReactNode;
}

export const StarCanvasProvider: React.FC<StarCanvasProviderProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <StarCanvasContext.Provider value={{ isVisible, toggleVisibility }}>
      {children}
    </StarCanvasContext.Provider>
  );
};

import React, { createContext, useContext, useState, useEffect } from 'react';
import { PopupModal } from 'react-calendly';

interface CalendlyContextType {
  openCalendly: () => void;
  closeCalendly: () => void;
}

const CalendlyContext = createContext<CalendlyContextType | undefined>(undefined);

export const CalendlyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRootElement(document.getElementById('root'));
  }, []);

  const openCalendly = () => setIsOpen(true);
  const closeCalendly = () => setIsOpen(false);

  return (
    <CalendlyContext.Provider value={{ openCalendly, closeCalendly }}>
      {children}
      {rootElement && (
        <PopupModal
          url="https://calendly.com/rishabhar1974/30min"
          onModalClose={closeCalendly}
          open={isOpen}
          rootElement={rootElement}
        />
      )}
    </CalendlyContext.Provider>
  );
};

export const useCalendly = () => {
  const context = useContext(CalendlyContext);
  if (context === undefined) {
    throw new Error('useCalendly must be used within a CalendlyProvider');
  }
  return context;
};

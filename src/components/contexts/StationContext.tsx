// import React, { createContext, useContext, useState } from 'react';

// type StationContextType = 'NO0102A' | 'bangkok';

// const StationContext = createContext<string>('NO0102A');
// const UpdateStationContext = createContext<string>('NO0102A');

// export function useStation() {
//   return useContext(StationContext);
// }

// export function useStationUpdate() {
//   return useContext(UpdateStationContext);
// }

// export function StationProvider({ children }: { children: React.ReactNode }) {
//   const [station, setStation] = useState<string>('NO0102A');

//   function changeStation(newStation: string) {
//     setStation(newStation);
//     return station;
//   }

//   return (
//     <StationContext.Provider value={station}>
//       <UpdateStationContext.Provider value={changeStation('')}>{children}</UpdateStationContext.Provider>
//     </StationContext.Provider>
//   );
// }

// StationContext.tsx
import React, { createContext, useState } from 'react';

// Define the context
interface StationContextType {
  selectedStation: string;
  setSelectedStation: React.Dispatch<React.SetStateAction<string>>;
}
interface StationContextProviderProps {
  children: React.ReactNode;
}
const StationContext = createContext<StationContextType | undefined>(undefined);

// Define the provider
export const StationContextProvider: React.FC<StationContextProviderProps> = ({ children }) => {
  const [selectedStation, setSelectedStation] = useState<string>('');

  return <StationContext.Provider value={{ selectedStation, setSelectedStation }}>{children}</StationContext.Provider>;
};

// Custom hook for consuming the context
export const useStationContext = () => {
  const context = React.useContext(StationContext);
  if (context === undefined) {
    throw new Error('useStationContext must be used within a StationContextProvider');
  }
  return context;
};

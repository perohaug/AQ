import { HelmetProvider } from 'react-helmet-async';
import { Router } from '../router/Router';
import { StationContextProvider } from '../contexts/StationContext';

export const App = () => {
  return (
    <HelmetProvider>
      <StationContextProvider>
        <Router />
      </StationContextProvider>
    </HelmetProvider>
  );
};

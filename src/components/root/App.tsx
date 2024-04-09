import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from 'components/contexts/UserContext';
import Main from 'components/root/Main';
import { Router } from '../router/Router';
import { StationContextProvider } from '../contexts/StationContext';

export const App = () => {
  return (
    <HelmetProvider>
      <AuthProvider>
        <StationContextProvider>
          <Router />
        </StationContextProvider>
      </AuthProvider>
    </HelmetProvider>
  );
};

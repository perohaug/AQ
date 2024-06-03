import { HelmetProvider } from 'react-helmet-async';
import { Router } from '../router/Router';

export const App = () => {
  return (
    <HelmetProvider>
      <Router />
    </HelmetProvider>
  );
};

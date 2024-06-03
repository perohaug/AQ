import { createBrowserHistory, Location } from 'history';

const history = createBrowserHistory();

export const navigateToLastLocation = () => {
  history.go(-1);
};

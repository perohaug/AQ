import { createBrowserHistory, Location } from 'history';

const history = createBrowserHistory();
interface location {
  pathname: string;
  search: string;
  hash: string;
  state: unknown;
  key: string;
}

export const navigateToLastLocation = () => {
  history.go(-1);
};

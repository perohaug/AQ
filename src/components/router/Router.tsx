import { Dialog } from '@headlessui/react';
import { lazy, Suspense, useState, useEffect, useRef } from 'react';
import { Outlet, RouteObject, useRoutes, BrowserRouter, Link } from 'react-router-dom';
import AQMap from '../screens/AQMap';
import { aqMessage } from '../screens/TextContent/aqMessageInfo';
import { Header } from './Header';
import useDataFetcher, { ApiResponse } from '../lib/API/DataFetcher';

const Loading = () => <p className="p-4 w-full h-full text-center">Loading...</p>;

const IndexScreen = lazy(() => import('~/components/screens/Homepage/Index'));
const Page404Screen = lazy(() => import('~/components/screens/404'));
const AQPage = lazy(() => import('~/components/screens/AQ'));
const LearnMore = lazy(() => import('~/components/screens/AQDetail/AQDetail'));
const Map = lazy(() => import('~/components/screens/AQMap'));

function Layout() {
  const { fetchData, status, data, error }: ApiResponse = useDataFetcher();
  const handleSubmit = async () => {
    await fetchData('https://api.met.no/weatherapi/airqualityforecast/0.1/?station=NO0102A');
    //await fetchData('https://api.waqi.info/feed/bangkok/?token=22f37ad5c0fae31b55ee3304697b74c44a1a4cd0');
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    handleSubmit();
  }, []);

  const aqMessageValue = aqMessage[data?.data.time[0].variables.AQI.text || 'high'];
  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    target.style.fontWeight = '200';
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    target.style.fontWeight = '250';
  };

  return (
    <div>
      {/* Insert style tag on the nav-tag */}
      <nav className="p-4  bg-primary">
        {location.pathname == '/learn' && (
          <div className="flex items-center justify-between text-2xl">
            <Link className="font-light whitespace-nowrap dark:text-grey" to="/">
              <div className="flex flex-row">
                <svg
                  className="mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="39"
                  height="24"
                  viewBox="0 0 39 24"
                  fill="none"
                >
                  <path d="M6 12H38" stroke="#3D4043" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M12 3L6 12L12 21"
                    stroke="#3D4043"
                    stroke-miterlimit="16"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="ml-5 font-extralight" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  Trondheim
                </p>
              </div>
            </Link>
            <Link to="/map" className="z-20 absolute left-1/2 ml-80 mt-24">
              <button
                className="ml-80 rounded-full bg-blue-800 text-white text-2xl px-4 hover:scale-110 transition-transform duration-300 py-2 font-extralight"
                style={{ width: '120px', height: '120px', backgroundColor: '#fb5607' }}
              >
                Se i kart
              </button>
            </Link>
          </div>
        )}
        {location.pathname == '/' && (
          <Link to="/map">
            <div className="absolute left-1/2 ml-80">
              <button
                className="ml-80 rounded-full bg-blue-800 text-white text-2xl px-4 hover:scale-110 transition-transform duration-300 py-2 font-extralight"
                style={{ width: '120px', height: '120px', backgroundColor: '#fb5607' }}
              >
                Se i kart
              </button>
            </div>
          </Link>
        )}
        {location.pathname == '/map' && (
          <Link className="font-light whitespace-nowrap dark:text-grey" to="/">
            <div className="flex flex-row">
              <svg
                className="mt-1"
                xmlns="http://www.w3.org/2000/svg"
                width="39"
                height="24"
                viewBox="0 0 39 24"
                fill="none"
              >
                <path d="M6 12H38" stroke="#3D4043" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M12 3L6 12L12 21"
                  stroke="#3D4043"
                  stroke-miterlimit="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p
                className="ml-5 font-extralight text-2xl"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Trondheim
              </p>
            </div>
          </Link>
        )}
      </nav>
      <Outlet />
    </div>
  );
}

export const Router = () => {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  );
};

const InnerRouter = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <IndexScreen />,
        },
        {
          path: '*',
          element: <Page404Screen />,
        },
        {
          path: 'AQ',
          element: <AQPage />,
        },
        {
          path: 'learn',
          element: <LearnMore />,
        },
        {
          path: 'map',
          element: <Map />,
        },
      ],
    },
  ];
  const element = useRoutes(routes);
  return (
    <div className="">
      <Suspense fallback={<Loading />}>{element}</Suspense>
    </div>
  );
};
function fetchData(arg0: string) {
  throw new Error('Function not implemented.');
}

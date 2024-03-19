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

function Layout() {
  const { fetchData, status, data, error }: ApiResponse = useDataFetcher();
  const handleSubmit = async () => {
    await fetchData('https://api.met.no/weatherapi/airqualityforecast/0.1/?station=NO0102A');
    // await fetchData('https://api.waqi.info/feed/bangkok/?token=22f37ad5c0fae31b55ee3304697b74c44a1a4cd0');
  };

  useEffect(() => {
    handleSubmit();
    console.log('kjører dette?', data);
  }, []);

  const aqMessageValue = aqMessage[data?.data.time[0].variables.AQI.text || 'low'];

  return (
    <div>
      {/* Insert style tag on the nav-tag */}
      <nav className="p-4 grid-rows-2 flex items-center justify-start bg-primary">
        {location.pathname !== '/' && (
          <Link className="text-2xl font-light whitespace-nowrap dark:text-grey" to="/">
            <div className="flex flex-row">
              <h1 className="text-5xl rock-3d-logo mt-2">
                {' '}
                <b>JegPuster</b>
              </h1>
              <div className="mr-10">
                <div className="mr-3">
                  <svg width={80} height={80}>
                    <circle
                      cx={40}
                      cy={40}
                      r={20}
                      fill={aqMessageValue.color} // Adjust opacity as needed (0.3 for example)
                      opacity={0.5}
                      style={{ animation: 'expandShrink 1s infinite alternate' }}
                    />
                    {/* Tinier circle */}
                    <circle cx={40} cy={40} r={25} fill={aqMessageValue.color} /> {/* Adjust the radius as needed */}
                  </svg>
                  <style>
                    {`
        @keyframes expandShrink {
          0% {
            r: 30; // Initial radius
          }
          50% {
            r: 35; // Maximum radius
          }
          100% {
            r: 40; // Back to the initial radius
          }
        }
      `}
                  </style>
                </div>
              </div>
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
          element: <AQMap lat={0} lon={0} AQI={0} station={''} />,
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

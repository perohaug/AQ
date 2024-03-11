import { Dialog } from '@headlessui/react';
import { lazy, Suspense, useState } from 'react';
import { Outlet, RouteObject, useRoutes, BrowserRouter, Link } from 'react-router-dom';
import AQMap from '../screens/AQMap';
import { aqMessage } from '../screens/aqMessageInfo';
import { Header } from './Header';

const Loading = () => <p className="p-4 w-full h-full text-center">Loading...</p>;

const IndexScreen = lazy(() => import('~/components/screens/Index'));
const Page404Screen = lazy(() => import('~/components/screens/404'));
const AQPage = lazy(() => import('~/components/screens/AQ'));
const LearnMore = lazy(() => import('~/components/screens/LearnMore'));

function Layout() {
  return (
    <div>
      {/* Insert style tag on the nav-tag */}
      <nav className="p-4 grid-rows-2 flex items-center justify-center bg-primary">
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
                      fill={aqMessage['low'].color} // Adjust opacity as needed (0.3 for example)
                      opacity={0.5}
                      style={{ animation: 'expandShrink 1s infinite alternate' }}
                    />
                    {/* Tinier circle */}
                    <circle cx={40} cy={40} r={25} fill={aqMessage['low'].color} />{' '}
                    {/* Adjust the radius as needed */}
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
          element: <AQMap />,
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

import { Dialog } from '@headlessui/react';
import { lazy, Suspense, useState } from 'react';
import { Outlet, RouteObject, useRoutes, BrowserRouter, Link } from 'react-router-dom';
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
        {location.pathname === '/learn' && (
          <Link className="text-2xl font-light whitespace-nowrap dark:text-grey" to="/">
            <div>
              <h1 className="text-5xl rock-3d-logo">JegPuster</h1>
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

import { lazy, Suspense, useState } from 'react';
import { Outlet, RouteObject, useRoutes, BrowserRouter, Link } from 'react-router-dom';
import BackButton from './BackButton';

const Loading = () => <p className="p-4 w-full h-full text-center">Loading...</p>;

const IndexScreen = lazy(() => import('~/components/screens/Homepage/Index'));
const Page404Screen = lazy(() => import('~/components/screens/404'));
const LearnMore = lazy(() => import('~/components/screens/AQDetail/AQDetail'));
const Map = lazy(() => import('~/components/screens/AQMap'));

function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <nav className="p-4  bg-primary">
        {location.pathname == '/learn' && (
          <div className="flex items-center justify-between text-2xl">
            <BackButton mouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} />

            <Link to="/map" className="absolute left-1/2 ml-80 mt-24 z-10">
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
          <div className="flex items-center justify-between text-2xl">
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
          </div>
        )}
        {location.pathname == '/map' && (
          <div className="flex items-center justify-between text-2xl">
            <BackButton mouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} />
          </div>
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

import ReactDom from 'react-dom/client';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
// import Skeleton,{ SkeletonTheme } from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

import { LOCATIONS } from './utils/constants';

import Header from './components/Header';
import MainSection from './components/MainSection.js';
import Footer from './components/Footer';

import About from './pages/About';
import Error from './pages/Error';

const AppLayout = () => (
  <div id="AppLayout">
    <Header locationList={LOCATIONS} />
    <Outlet />
    <Footer />
  </div>
);

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <MainSection /> },
      { path: '/about', element: <About /> }
    ],
    errorElement: <Error />
  }
]);

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter} />);

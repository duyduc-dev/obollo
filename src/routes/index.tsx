import { authRouter } from '@pages/auth';
import { homeRoutes } from '@pages/home';
import { introduceRoutes } from '@pages/introduce';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const rootRoutes = createBrowserRouter([
  authRouter,
  homeRoutes,
  introduceRoutes,
  {
    path: '*',
    element: (() => <h1>Page Not found</h1>)(),
  },
]);

const RootRouter = () => {
  return <RouterProvider router={rootRoutes} />;
};

export default RootRouter;

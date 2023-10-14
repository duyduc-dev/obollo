import { RoutesPath } from '@constants';
import MainLayout from '@layouts/MainLayout';
import React from 'react';
import { Outlet, RouteObject } from 'react-router-dom';

import HomePage from './HomePage';

export const homeRoutes: RouteObject = {
  path: RoutesPath.home.path,
  element: (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ),
  children: [
    {
      index: true,
      element: <HomePage />,
    },
  ],
};

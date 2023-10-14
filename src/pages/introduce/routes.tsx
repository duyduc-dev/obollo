import { RoutesPath } from '@constants';
import EmptyLayout from '@layouts/EmptyLayout';
import React from 'react';
import { Outlet, RouteObject } from 'react-router-dom';

import IntroducePage from './IntroducePage';

export const introduceRoutes: RouteObject = {
  path: RoutesPath.introduce.path,
  element: (
    <EmptyLayout>
      <Outlet />
    </EmptyLayout>
  ),
  children: [
    {
      index: true,
      element: <IntroducePage />,
    },
  ],
};

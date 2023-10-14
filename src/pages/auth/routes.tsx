import { RoutesPath } from '@constants';
import EmptyLayout from '@layouts/EmptyLayout';
import React from 'react';
import { Outlet, RouteObject } from 'react-router-dom';

import AuthPage from './AuthPage';
import SignUpPage from './signup/SignUpPage';

export const authRouter: RouteObject = {
  path: RoutesPath.auth.path,
  element: (
    <EmptyLayout>
      <Outlet />
    </EmptyLayout>
  ),
  children: [
    {
      index: true,
      element: <AuthPage />,
    },
    {
      path: RoutesPath.auth.children.signup.path,
      element: <SignUpPage />,
    },
  ],
};

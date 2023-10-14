export const RoutesPath = {
  home: {
    path: '/',
  },
  introduce: {
    path: '/introduce',
  },
  auth: {
    path: '/auth',
    children: {
      signup: { path: '/auth/signup' },
    },
  },
};

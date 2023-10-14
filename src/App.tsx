import '@assets/scss/main.scss';

import Toaster from '@components/common/Toaster/Toaster';
import React, { useEffect } from 'react';

import { BODY_CLASSNAME } from './constants/className';
import RootRouter from './routes';

const App = () => {
  useEffect(() => {
    document.body.classList.add(BODY_CLASSNAME);
  }, []);

  return (
    <>
      <RootRouter />
      <Toaster />
    </>
  );
};

export default App;

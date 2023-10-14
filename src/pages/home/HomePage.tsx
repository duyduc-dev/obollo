import { ButtonOverlay } from '@components/common/Button';
import { ToastType } from '@constants/enum';
import cn from '@libs/clsx';
import React from 'react';

import useToasterStore from '@/store/useToasterStore';

// import styles from './home.module.scss';

const HomePage = () => {
  const { createToast } = useToasterStore();

  return (
    <div className={cn('hello')}>
      Home Page
      <ButtonOverlay
        onClick={() =>
          createToast({
            visible: true,
            loading: true,
            label: 'loading...',
            duration: 3000,
          })
        }
      >
        Press toast
      </ButtonOverlay>
      <ButtonOverlay
        onClick={() =>
          createToast({
            loading: false,
            label: 'OK',
            type: ToastType.WARNING,
            duration: 100000,
          })
        }
      >
        Press toast
      </ButtonOverlay>
    </div>
  );
};

export default HomePage;

import LeftBarNavigation from '@layouts/components/LeftBar';
import Navigation from '@layouts/components/Navigation';
import React, { ReactNode } from 'react';

import styles from './mainLayout.module.scss';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;

  return (
    <div className={styles.container}>
      <Navigation />
      <div className={styles.wrapBody}>
        <LeftBarNavigation />
        <div className={styles.content}>
          <div className={styles.innerContent}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

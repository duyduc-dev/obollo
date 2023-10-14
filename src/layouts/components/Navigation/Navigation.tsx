import { ButtonOverlay } from '@components/common/Button';
import { Avatar } from '@mui/material';
import React from 'react';
import { BsFillCaretDownFill } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router';

import styles from './navigate.module.scss';

const Navigation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleRedirect = () => {
    if (pathname === '/') return;
    navigate('/');
  };

  return (
    <header className={styles.navigateContainer}>
      <div className={styles.navigateInnerContainer}>
        <ButtonOverlay onClick={handleRedirect} className={styles.logoContainer}>
          <span>Obillo</span>
        </ButtonOverlay>
        <ButtonOverlay className={styles.btnMenuProfile}>
          <Avatar
            sx={{
              width: 32,
              height: 32,
            }}
            src="https://brandelement-static.obello.ai/63ac5ce593294f67dd00203b/Avatar/642b9662c8cdf62d711eb958.png"
          />
          <BsFillCaretDownFill size={16} />
        </ButtonOverlay>
      </div>
    </header>
  );
};

export default Navigation;

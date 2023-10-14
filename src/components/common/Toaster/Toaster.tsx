import { ButtonOverlay } from '@components/common/Button';
import { PuffLoader } from '@components/common/Loading';
import { ToastType } from '@constants/enum';
import cn from '@libs/clsx';
import React, { useEffect } from 'react';

import useToasterStore from '@/store/useToasterStore';

import styles from './toaster.module.scss';

const Toaster = () => {
  const { visible, label, loading, duration, delayClick, hiddenOnClick, type, setVisible } = useToasterStore();

  const handleClickToast = () => {
    if (hiddenOnClick) {
      setTimeout(() => {
        setVisible(false);
      }, delayClick);
    }
  };

  const handleToastType = (toastType: ToastType = ToastType.NORMAL) => {
    const typeList = {
      [ToastType.PENDING]: styles.toastPending,
      [ToastType.SUCCESS]: styles.toastSuccess,
      [ToastType.WARNING]: styles.toastWarning,
      [ToastType.ERROR]: styles.toastError,
      [ToastType.NORMAL]: '',
    };

    return typeList[toastType];
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!loading && duration > 0) {
      timer = setTimeout(() => {
        setVisible(false);
      }, duration);
    }
    return () => clearTimeout(timer);
  }, [loading, duration, visible]);

  return (
    <div className={cn(visible ? styles.container : styles.hidden)}>
      <ButtonOverlay onClick={handleClickToast} className={cn(styles.content, handleToastType(type))}>
        {loading && <PuffLoader />}
        <span>{label}</span>
      </ButtonOverlay>
    </div>
  );
};

export default Toaster;

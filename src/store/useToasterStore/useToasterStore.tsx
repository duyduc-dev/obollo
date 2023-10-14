import { ToastType } from '@constants/enum';
import { create } from 'zustand';

import { ToasterStore } from './type';

const useToasterStore = create<ToasterStore>((setState) => ({
  type: ToastType.NORMAL,
  label: 'empty',
  duration: 1000,
  delayClick: 500,
  loading: false,
  visible: false,
  hiddenOnClick: true,

  setDuration: (duration) => setState({ duration }),
  setLabel: (label) => setState({ label }),
  setLoading: (isLoading) => setState({ loading: isLoading }),
  setToastType: (type) => setState({ type }),
  setVisible: (visible) => setState({ visible }),
  createToast: (toast) => setState({ visible: true, type: ToastType.NORMAL, loading: false, duration: 1000, ...toast }),
}));

export default useToasterStore;

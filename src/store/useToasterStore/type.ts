import { ToastType } from '@constants/enum';

interface ToasterState {
  visible: boolean;
  loading: boolean;
  hiddenOnClick: boolean;
  duration: number;
  delayClick: number;
  label: string;
  type: ToastType;
}

interface ToasterActions {
  setVisible: (visible: boolean) => void;
  setLoading: (isLoading: boolean) => void;
  setDuration: (duration: number) => void;
  setLabel: (label: string) => void;
  setToastType: (type: ToastType) => void;
  createToast: (toast: Partial<ToasterState>) => void;
}

export type ToasterStore = ToasterState & ToasterActions;

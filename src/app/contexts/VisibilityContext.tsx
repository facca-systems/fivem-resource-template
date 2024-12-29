import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { useNuiCallback } from '@app/hooks/useNuiCallback';
import { useNuiMessage } from '@app/hooks/useNuiMessage';
import { isEnvBrowser } from '@app/utils/misc';

type VisibilityProviderProps = {
  children: React.ReactNode;
};

type VisibilityProviderState = {
  visible: boolean;
  setVisible: (newVisibility: boolean) => void;

  canCloseUi: boolean;
  setCanCloseUi: (newStatus: boolean) => void;

  fetchHideFrame: () => Promise<void>;
};

const VisibilityProviderContext = createContext<VisibilityProviderState>({
  visible: false,
  setVisible: () => {},

  canCloseUi: false,
  setCanCloseUi: () => {},

  fetchHideFrame: async () => {},
});

export function VisibilityProvider({ children }: VisibilityProviderProps) {
  const [visible, setVisible] = useState<boolean>(isEnvBrowser());
  const [canCloseUi, setCanCloseUi] = useState(true);

  const fetchHideFrame = useCallback(async () => {
    if (!visible) return;

    const resp = await useNuiCallback('hideFrame', {}, true);

    if (resp) {
      setVisible(false);
    }
  }, [visible]);

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (!canCloseUi) return;

      if (event.key === 'Escape') {
        fetchHideFrame();
      }
    };

    if (visible) {
      window.addEventListener('keydown', listener);
    }

    if (!visible) {
      window.removeEventListener('keydown', listener);
    }
  }, [canCloseUi, visible, fetchHideFrame]);

  useNuiMessage<boolean>('setVisible', setVisible);

  return (
    <VisibilityProviderContext.Provider
      value={{
        visible,
        setVisible,

        canCloseUi,
        setCanCloseUi,

        fetchHideFrame,
      }}
    >
      {children}
    </VisibilityProviderContext.Provider>
  );
}

export const useVisibility = () => {
  const context = useContext(VisibilityProviderContext);

  if (context === undefined)
    throw new Error('useVisibility must be used within a VisibilityProvider');

  return context;
};

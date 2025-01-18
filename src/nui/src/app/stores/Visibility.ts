import { create } from 'zustand';

import { useNuiCallback } from '@app/hooks/useNuiCallback';
import { isEnvBrowser } from '@app/utils/misc';

interface VisibilityStore {
  visible: boolean;
  canCloseUi: boolean;
}

interface VisiblityActions {
  setVisible: (value: boolean) => void;
  setCanCloseUi: (value: boolean) => void;

  fetchHideFrame: () => Promise<void>;
}

export const useVisibilityStore = create<VisibilityStore & VisiblityActions>()(
  (set, get) => ({
    visible: isEnvBrowser(),
    canCloseUi: true,
    setVisible: (newVisibility: boolean) => set({ visible: newVisibility }),
    setCanCloseUi: (newStatus: boolean) => set({ canCloseUi: newStatus }),

    fetchHideFrame: async () => {
      const { visible } = get();

      if (!visible) return;

      const resp = await useNuiCallback('hideFrame', {}, true);

      if (resp) {
        set({ visible: false });
      }
    },
  }),
);

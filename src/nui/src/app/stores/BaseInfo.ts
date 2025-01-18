import { create } from 'zustand';

import { useNuiCallback } from '@app/hooks/useNuiCallback';

interface BaseInfoStore {
  player: { name: string; id: number; avatar: string; coins: number };
  headerBanner: string;
  logos: { topNavbar: string; bottomNavbar: string };
}

interface BaseInfoActions {
  getBaseInfo: () => Promise<void>;
}

export const useBaseInfo = create<BaseInfoStore & BaseInfoActions>()((set) => ({
  player: {
    name: 'Miguel Facca',
    id: 1285,
    avatar: 'https://github.com/miguel-facca.png',
    coins: 1575,
  },
  headerBanner: '',

  logos: { topNavbar: '', bottomNavbar: '' },

  getBaseInfo: async () => {
    const resp = await useNuiCallback(
      'getPanelBaseInfo',
      {},
      {
        player: {
          name: 'Miguel Facca',
          id: 1285,
          avatar: 'https://github.com/miguel-facca.png',
          coins: 1575,
        },
        headerBanner: '',

        logos: { topNavbar: '', bottomNavbar: '' },
      },
    );

    if (resp) {
      set({
        player: resp.player,
        headerBanner: resp.headerBanner,
        logos: resp.logos,
      });
    }
  },
}));

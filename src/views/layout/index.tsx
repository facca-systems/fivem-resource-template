import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { useVisibility } from '@app/contexts/VisibilityContext';
import { useNuiCallback } from '@app/hooks/useNuiCallback';
import { ColorVariants, attributeColorsToHTML } from '@app/utils/colors';
import { Button } from '@views/components/Button';
import { Logo } from '@views/components/Logo';

export function Layout() {
  const { visible } = useVisibility();

  useEffect(() => {
    if (!visible) return;

    (async () => {
      const resp = await useNuiCallback<
        | { primaryColor: string; secondaryColor: string; thirdyColor: string }
        | keyof typeof ColorVariants
      >('getColors', {}, 'FACCA');

      attributeColorsToHTML(resp);
    })();
  }, [visible]);

  return (
    <div className="w-[75rem] h-[43.75rem] flex absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-[2] bg-[#0f0f0f] rounded-[.75rem] p-[.875rem]">
      <aside
        className="w-[14.5rem] h-full flex flex-col items-center py-5 px-[.625rem] rounded-[.375rem] border border-[#353535] border-solid"
        style={{
          background:
            'radial-gradient(79.03% 79.03% at 50% 20.97%, rgba(255, 255, 255, 0.07) 0%, rgba(153, 153, 153, 0.0147) 100%)',
        }}
      >
        <Logo />
        <Button
          className="h-[2.25rem] rounded-[.25rem] font-[Purista] text-base font-semibold uppercase w-[7.5rem] shadow-[0px_4px_23.9px_0px_#9336E480] border border-[#9336E4] border-solid"
          style={{
            background:
              'radial-gradient(100% 138.56% at 0% 51.25%, #5B00AB 0%, #9336E4 59.77%, #5B00AB 100%)',
          }}
        >
          Entrar
        </Button>
      </aside>
      <Outlet />
    </div>
  );
}

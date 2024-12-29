import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { useVisibility } from '@app/contexts/VisibilityContext';
import { useNuiCallback } from '@app/hooks/useNuiCallback';
import { ColorVariants, attributeColorsToHTML } from '@app/utils/colors';
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
    <div className="w-[87.5rem] h-[56.25rem] flex justify-center absolute left-[calc(50%-43.75rem)] top-[calc(50%-28.125rem)] z-[2] bg-black/40 rounded-[.25rem] p-4">
      <div className="w-full h-full flex flex-col items-center bg-[#111111] rounded-[.25rem]">
        <Logo />
        <Outlet />
      </div>
    </div>
  );
}

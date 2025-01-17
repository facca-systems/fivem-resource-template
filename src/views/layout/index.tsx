import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { useNuiCallback } from "@app/hooks/useNuiCallback";
import { useVisibilityStore } from "@app/stores/Visibility";
import { type ColorVariants, attributeColorsToHTML } from "@app/utils/colors";
import { Button } from "@views/components/Button";
import { Logo } from "@views/components/Logo";

export function Layout() {
  const visible = useVisibilityStore((state) => state.visible);

  useEffect(() => {
    if (!visible) return;

    (async () => {
      const resp = await useNuiCallback<
        | { primaryColor: string; secondaryColor: string; thirdyColor: string }
        | keyof typeof ColorVariants
      >("getColors", {}, "FACCA");

      attributeColorsToHTML(resp);
    })();
  }, [visible]);

  return (
    <div className="-translate-y-1/2 -translate-x-1/2 absolute top-1/2 left-1/2 z-[2] flex h-[43.75rem] w-[75rem] rounded-[.75rem] bg-[#0f0f0f] p-[.875rem]">
      <aside
        className="flex h-full w-[14.5rem] flex-col items-center rounded-[.375rem] border border-[#353535] border-solid px-[.625rem] py-5"
        style={{
          background:
            "radial-gradient(79.03% 79.03% at 50% 20.97%, rgba(255, 255, 255, 0.07) 0%, rgba(153, 153, 153, 0.0147) 100%)",
        }}
      >
        <Logo />
        <Button
          className="h-[2.25rem] w-[7.5rem] rounded-[.25rem] border border-[#9336E4] border-solid font-[Purista] font-semibold text-base uppercase shadow-[0px_4px_23.9px_0px_#9336E480]"
          style={{
            background:
              "radial-gradient(100% 138.56% at 0% 51.25%, #5B00AB 0%, #9336E4 59.77%, #5B00AB 100%)",
          }}
        >
          Entrar
        </Button>
      </aside>
      <Outlet />
    </div>
  );
}

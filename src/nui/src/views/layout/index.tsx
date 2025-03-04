import { useServerColors } from "@app/hooks/useServerColors";
import { useVisibilityStore } from "@app/stores/Visibility";
import { cn } from "@app/utils";
import { Button } from "@views/components/Button";
import { Logo } from "@views/components/Logo";
import { Outlet } from "react-router-dom";
import { useShallow } from "zustand/shallow";

export function Layout() {
  const { visible, setVisible } = useVisibilityStore(useShallow(state => ({
    visible: state.visible,
    setVisible: state.setVisible
  })))

  useServerColors();

  return (
    <div className={cn("-translate-y-1/2 -translate-x-1/2 absolute top-1/2 left-1/2 z-[2] flex h-[43.75rem] w-[75rem] rounded-[.75rem] bg-[#0f0f0f] p-[.875rem] transition-all duration-500", visible ? "opacity-100" : "opacity-0")}>
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

import { useClickSound } from "@app/hooks/useClickSound";
import { useLayout } from "@app/hooks/useLayout";
import { useVisibilityStore } from "@app/stores/Visibility";
import { cn } from "@app/utils";
import { ErrorBoundary } from "@views/components/ErrorBoundary";
import { Outlet } from "react-router-dom";

export function Layout() {
	const visible = useVisibilityStore((state) => state.visible);

	useLayout();
	useClickSound();

	return (
		<div
			className={cn(
				"-translate-y-1/2 -translate-x-1/2 absolute top-1/2 left-1/2 z-[2] flex h-[43.75rem] w-[75rem] flex-col rounded-[.75rem] bg-[#0f0f0f] transition-all duration-500",
				visible ? "opacity-100" : "opacity-0",
			)}
		>
			<header className="mb-2.5 flex h-[5rem] w-full flex-col items-center justify-center border-b border-b-white/5 border-solid p-4">
				<button
					type="button"
					className="appearance-none text-nowrap rounded-sm bg-white px-3 py-2 font-medium text-black text-sm"
				>
					Test sound
				</button>
			</header>
			<main className="h-[calc(100%-5.625rem)] w-full px-4 pb-4">
				<ErrorBoundary>
					<Outlet />
				</ErrorBoundary>
			</main>
		</div>
	);
}

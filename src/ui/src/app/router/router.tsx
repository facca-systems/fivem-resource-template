import { Route, Routes, useNavigate } from "react-router-dom";

import { useVisibilityStore } from "@app/stores/Visibility";
import { lazyLoad } from "@app/utils/lazyLoad";
import { SpinLoader } from "@views/components/SpinLoader";
import { Layout } from "@views/layout";
import { Suspense, useEffect } from "react";
import { routes } from "./routes";

const { Home } = lazyLoad(() => import("../../views/pages/Home"));

const DEFAULT_PAGE: keyof typeof routes = "home";

export function Router() {
	const visible = useVisibilityStore((state) => state.visible);
	const navigate = useNavigate();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		navigate(DEFAULT_PAGE, { replace: true });
	}, [visible]);

	return (
		<Suspense fallback={<SpinLoader />}>
			<Routes>
				<Route element={<Layout />} path="/">
					<Route element={<Home />} path={routes.home} />
				</Route>
			</Routes>
		</Suspense>
	);
}

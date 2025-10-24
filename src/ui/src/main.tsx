import { Router } from "@app/router/router";
import { isEnvBrowser } from "@app/utils/misc";
import React from "react";
import ReactDOM from "react-dom/client";

import { HashRouter } from "react-router-dom";

if (isEnvBrowser()) {
	const body = document.getElementById("root");

	body!.style.backgroundImage = "url('https://files.fivemerr.com/images/ab427266-34e9-4649-8024-077a230837c6.png')";
	body!.style.backgroundSize = "cover";
	body!.style.backgroundRepeat = "no-repeat";
	body!.style.backgroundPosition = "center";
	body!.style.height = "100vh";
}

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<HashRouter>
			<Router />
		</HashRouter>
	</React.StrictMode>,
);

import { Router } from "@app/router/router";
import { isEnvBrowser } from "@app/utils/misc";
import { ToastifyContainer } from "@views/components/Toastify/container";
import React from "react";
import ReactDOM from "react-dom/client";

import "@views/styles/fonts/stylesheet.css";
import "@views/styles/index.css";
import { MotionSetup } from "@app/services/MotionConfig";

if (isEnvBrowser()) {
	const body = document.getElementById("root");

	body!.style.backgroundImage = "url('https://files.catbox.moe/4lban5.png')";
	body!.style.backgroundSize = "cover";
	body!.style.backgroundRepeat = "no-repeat";
	body!.style.backgroundPosition = "center";
	body!.style.height = "100vh";
}

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<MotionSetup>
			<Router />
			<ToastifyContainer />
		</MotionSetup>
	</React.StrictMode>,
);

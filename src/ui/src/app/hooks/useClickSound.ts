import { useVisibilityStore } from "@app/stores/Visibility";
import ClickSound from "@views/assets/sounds/click.mp3";
import { useEffect } from "react";
import { useSound } from "./useSound";

export const useClickSound = () => {
	const { play } = useSound(ClickSound, { volume: 0.05 });
	const visible = useVisibilityStore();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const listener = (event: MouseEvent) => {
			let element = event.target as HTMLElement;
			while (element) {
				if (element.nodeName === "BUTTON") {
					console.log({ event });
					play();
					return;
				}
				element = element.parentElement as HTMLElement;
			}
		};

		window.addEventListener("mousedown", listener);

		return () => {
			window.removeEventListener("mousedown", listener);
		};
	}, []);
};

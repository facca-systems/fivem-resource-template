import { useVisibilityStore } from "@app/stores/Visibility";
import ClickSound from "@views/assets/sounds/click.mp3";
import { useEffect } from "react";
import { useSound } from "./useSound";

export const useClickSound = () => {
	const { play } = useSound(ClickSound, { volume: 0.05 });
	const visible = useVisibilityStore();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (!visible) return;

		const listener = (event: MouseEvent) => {
			//@ts-expect-error
			if (event.target.nodeName !== "BUTTON") return;
			console.log({ event });
			play();
		};

		window.addEventListener("mousedown", listener);

		return () => {
			window.removeEventListener("mousedown", listener);
		};
	}, [visible]);
};

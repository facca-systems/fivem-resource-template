import ClickSound from "@views/assets/sounds/click.mp3";
import { useEffect } from "react";
import { useSound } from "./useSound";

export const useClickSound = () => {
	const { play } = useSound(ClickSound, { volume: 0.075 });

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const listener = (event: MouseEvent) => {
			if (
				//@ts-expect-error
				event.target.nodeName !== "BUTTON" ||
				//@ts-expect-error
				event.target.classList.contains("cursor-not-allowed")
			)
				return;
			play();
		};

		window.addEventListener("mousedown", listener);

		return () => {
			window.removeEventListener("mousedown", listener);
		};
	}, []);
};

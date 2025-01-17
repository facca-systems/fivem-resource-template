import { useVisibilityStore } from "@app/stores/Visibility";
import { type ColorVariants, attributeColorsToHTML } from "@app/utils/colors";
import { useEffect } from "react";
import { useNuiCallback } from "./useNuiCallback";

export const useServerColors = () => {
	const visible = useVisibilityStore(state => state.visible)

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
};

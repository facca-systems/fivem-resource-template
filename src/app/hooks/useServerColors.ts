import { useVisibilityStore } from "@app/stores/Visibility";
import { type ColorVariants, attributeColorsToHTML } from "@app/utils/colors";
import { fetchNui } from "@app/utils/fetchNui";
import { useEffect } from "react";

export const useServerColors = () => {
	const visible = useVisibilityStore((state) => state.visible);

	useEffect(() => {
		if (!visible) return;

		(async () => {
			const data = await fetchNui<
				| { primaryColor: string; secondaryColor: string; thirdyColor: string }
				| keyof typeof ColorVariants
			>({ path: "getColors", mockData: "FACCA" });

			if (!data) return;

			attributeColorsToHTML(data);
		})();
	}, [visible]);
};

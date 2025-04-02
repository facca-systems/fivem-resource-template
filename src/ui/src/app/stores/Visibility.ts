import { fetchNui } from "@app/utils/fetchNui";
import { isEnvBrowser } from "@app/utils/misc";
import { create } from "zustand";

interface VisibilityStore {
	visible: boolean;
	canCloseUi: boolean;
}

interface VisiblityActions {
	setVisible: (value: boolean) => void;
	setCanCloseUi: (value: boolean) => void;

	fetchHideFrame: () => Promise<void>;
}

export const useVisibilityStore = create<VisibilityStore & VisiblityActions>()(
	(set, get) => ({
		visible: isEnvBrowser(),
		canCloseUi: true,
		setVisible: (newVisibility: boolean) => set({ visible: newVisibility }),
		setCanCloseUi: (newStatus: boolean) => set({ canCloseUi: newStatus }),

		fetchHideFrame: async () => {
			const { visible } = get();

			if (!visible) return;

			const resp = await fetchNui({ path: "hideFrame", mockData: true });

			if (resp) {
				set({ visible: false });
			}
		},
	}),
);

import { useCallback, useState } from "react";
import { isEnvBrowser, sleep } from "./misc";

const resourceName = (window as any).GetParentResourceName
	? (window as any).GetParentResourceName()
	: "zs-boilerplate";

export async function fetchNui<CallbackResultType>({
	path,
	payload,
	delay,
	mockData,
}: {
	path: string;
	payload?: number;
	delay?: number;
	mockData?: CallbackResultType;
}) {
	const [data, setData] = useState<CallbackResultType | null>(null);

	const fetchData = useCallback(async () => {
		if (isEnvBrowser() && mockData) {
			delay && (await sleep(delay));

			return setData(mockData);
		}

		const resp = await fetch(`https://${resourceName}/${path}`, {
			method: "post",
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
			},
			body: JSON.stringify(payload),
		});
		const respFormatted = await resp.json();

		return setData(respFormatted);
	}, [delay, mockData, payload, path]);

	fetchData();

	return data;
}

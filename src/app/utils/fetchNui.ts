import { RESOURCE_NAME } from "@app/consts/resource";
import { useCallback, useState } from "react";
import { isEnvBrowser, sleep } from "./misc";

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

		const resp = await fetch(`https://${RESOURCE_NAME}/${path}`, {
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

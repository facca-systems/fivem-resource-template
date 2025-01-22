import { fetchNui } from "@app/utils/fetchNui";
import { useCallback, useEffect, useState } from "react";

export function useNuiCallback<CallbackResultType>({
	path,
	payload,
	delay,
	mockData,
}: {
	path: string;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	payload?: any;
	mockData?: CallbackResultType;
	delay?: number;
}) {
	const [data, setData] = useState<CallbackResultType | null>(null);
	const [error, setError] = useState<false | Error>(false);
	const [isLoading, setIsLoading] = useState(false);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const fetchData = useCallback(async () => {
		setIsLoading(true);

		try {
			const response = await fetchNui({ path, payload, mockData, delay });
			setData(response);

		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		} catch (error: any) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	}, [path, payload, delay]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return { data, error, isLoading, setData, refetch: fetchData };
}

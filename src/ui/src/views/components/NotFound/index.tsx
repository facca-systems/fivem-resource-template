import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function NotFound() {
	const [errorReaded, setErrorReaded] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setErrorReaded(true);
		}, 5000);

		return () => clearTimeout(timeoutId);
	}, []);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (!errorReaded) return;

		navigate(-1);
	}, [errorReaded]);

	return (
		<h1 className="flex h-full w-full items-center justify-center font-bold text-2xl">
			Pagina não encontrada
		</h1>
	);
}

import * as React from "react";

interface ErrorBoundaryProps {
	children: React.ReactNode;
	fallback?: React.ReactNode;
}

export class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	{ hasError: boolean; error?: Error }
> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(_error: Error) {
		return { hasError: true, error: _error.message };
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className="flex flex-col items-center gap-2">
					<h1 className="font-bold text-2xl text-white">
						Ocorreu um erro, contate o desenvolvedor
					</h1>
					<textarea
						className="w-1/2 resize-none rounded-md border border-white/10 border-solid bg-white/5 px-4 py-4 font-extralight text-rose-500 text-xs"
						value={JSON.stringify(this.state.error || "{}")}
						readOnly
					/>
				</div>
			);
		}

		return this.props.children;
	}
}

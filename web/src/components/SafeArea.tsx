import type { ReactNode } from "react";

type SafeAreaProps = {
	className?: string;
	children: ReactNode;
};

export default function SafeArea(p: SafeAreaProps) {
	const className = p.className ? p.className + " inner" : "inner";

	return (
		<div className="group">
			<div className={className}>{p.children}</div>
		</div>
	);
}

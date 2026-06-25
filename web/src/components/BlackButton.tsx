import "./BlackButton.css";

type BlackButtonProps = {
	icon?: React.ReactNode;
	label?: string;
};

export default function BlackButton(p: BlackButtonProps) {
	const className = p.label != null ? "black-button labeled" : "black-button";

	return (
		<div className={className}>
			{p.icon && <div className="icon">{p.icon}</div>}
			{p.label && <div className="label">{p.label}</div>}
		</div>
	);
}

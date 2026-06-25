import "./SoftButton.css";

type SoftButtonProps = {
	icon: React.ReactNode;
	label: string;
};

export default function SoftButton(p: SoftButtonProps) {
	return (
		<div className="soft-button">
			<div className="inner">
				<div className="icon">{p.icon}</div>
				<div className="label">{p.label}</div>
			</div>
		</div>
	);
}

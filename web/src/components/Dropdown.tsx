import "./Dropdown.css";
import ArrowDown from "../icons/ArrowDown";

type ExpandableProps = {
	icon: React.ReactNode;
	label: string;
};

export default function Dropdown(p: ExpandableProps) {
	return (
		<div className="dropdown">
			<div className="inner">
				<div className="icon">{p.icon}</div>
				<div className="label">{p.label}</div>
				<ArrowDown className="down" />
			</div>
		</div>
	);
}

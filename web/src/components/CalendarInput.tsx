import "./CalendarInput.css";
import CalendarIcon from "../icons/CalendarIcon";

type CalendarInputProps = {
	label: string;
};

export default function CalendarInput(p: CalendarInputProps) {
	return (
		<div className="calendar-input">
			<div className="label">{p.label}</div>
			<CalendarIcon className="icon" />
		</div>
	);
}

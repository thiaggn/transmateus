import "./SearchDropdown.css";
import { useState } from "react";

type SearchDropdownProps = {
	label: string;
};

export default function SearchDropdown(p: SearchDropdownProps) {
	const [focused, setFocused] = useState(false);

	const inputClass = focused ? "search-dropdown focused" : "search-dropdown";

	return (
		<div className={inputClass}>
			<div className="label">{p.label}</div>
			<input
				type="text"
				onFocus={() => setFocused(true)}
				onBlur={(e) => setFocused(e.target.value.length > 0)}
			/>
		</div>
	);
}

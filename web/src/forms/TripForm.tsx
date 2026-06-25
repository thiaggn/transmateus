import BlackButton from "../components/BlackButton";
import CalendarInput from "../components/CalendarInput";
import Dropdown from "../components/Dropdown";
import SearchDropdown from "../components/SearchDropdown";
import SoftButton from "../components/SoftButton";
import AddIcon from "../icons/AddIcon";
import ArrowsIcon from "../icons/ArrowsIcon";
import PersonIcon from "../icons/PersonIcon";

export default function TripForm() {
	return (
		<div className="search-area">
			<div className="row first">
				<Dropdown icon={<ArrowsIcon />} label="Ida e volta" />
				<Dropdown icon={<PersonIcon />} label="1 adulto" />
			</div>
			<div className="row second">
				<SearchDropdown label="Origem" />
				<BlackButton icon={<ArrowsIcon />} />
				<SearchDropdown label="Destino" />
				<CalendarInput label="Data da ida e volta" />
			</div>
			<div className="row third">
				<SoftButton icon={<AddIcon />} label="Adicionar desconto" />
				<BlackButton label="Buscar passagens" />
			</div>
		</div>
	);
}

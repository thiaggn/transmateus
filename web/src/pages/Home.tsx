import AddIcon from "../icons/AddIcon";
import ArrowDown from "../icons/ArrowDown";
import ArrowsIcon from "../icons/ArrowsIcon";
import PersonIcon from "../icons/PersonIcon";
import WheelIcon from "../icons/WheelIcon";
import "./Home.css";

type InputProps = {
	label: string;
};

export default function Home() {
	return (
		<div className="home-page">
			<div className="header">
				<Banner />
				<Search />
			</div>
		</div>
	);
}

function Banner() {
	return (
		<div className="section banner">
			<div className="section-inner">
				<div className="brand">
					<WheelIcon className="icon" />
					<div className="name">transmateus</div>
				</div>
			</div>
		</div>
	);
}

function Search() {
	return (
		<div className="section search">
			<div className="section-inner">
				<div className="search-area">
					<div className="row first">
						<div className="drop">
							<ArrowsIcon className="icon" />
							<div className="label">Ida e volta</div>
							<ArrowDown className="arrow-down" />
						</div>

						<div className="drop">
							<PersonIcon className="icon" />
							<div className="label">1 viajante</div>
							<ArrowDown className="arrow-down" />
						</div>
					</div>

					<div className="row second">
						<div className="space">Origem</div>
						<div className="switch">
							<ArrowsIcon className="icon" />
						</div>
						<div className="space">Destino</div>
						<div className="space">Data de ida e volta</div>
					</div>

					<div className="row third">
						<div className="col first">
							<div className="button">
								<AddIcon className="icon" />
								<div className="label">Adicionar desconto</div>
							</div>
						</div>
						<div className="col second">
							<div className="button">Buscar passagens</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function Input(p: InputProps) {
	return (
		<div className="input">
			<div className="label">{p.label}</div>
			<input type="text" />
		</div>
	);
}

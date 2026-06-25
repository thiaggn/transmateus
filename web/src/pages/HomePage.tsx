import "./HomePage.css";
import type React from "react";
import WheelIcon from "../icons/WheelIcon";
import ArrowRight from "../icons/ArrowRight";
import ClockIcon from "../icons/ClockIcon";
import BedIcon from "../icons/BedIcon";
import LuggageIcon from "../icons/LuggageIcon";
import MoneyIcon from "../icons/MoneyIcon";
import Brand from "../components/Brand";
import MainHeader from "../layouts/MainHeader";
import SafeArea from "../components/SafeArea";

export default function HomePage() {
	return (
		<div className="home-page">
			<MainHeader />
			<ManageYourTripSection />
			<CalloutBanner />
			<Footer />
		</div>
	);
}

type CardProps = {
	title: string;
	desc: string;
	icon: React.ReactNode;
};

function Card(p: CardProps) {
	return (
		<div className="card">
			<div className="icon">{p.icon}</div>
			<div className="title">{p.title}</div>
			<div className="desc">{p.desc}</div>
			<div className="bottom">
				<div className="arrow">
					<div className="circle">
						<ArrowRight className="icon" />
					</div>
				</div>
			</div>
		</div>
	);
}

const cards: CardProps[] = [
	{
		title: "Remarcação",
		desc: "Altere a data da viagem ou troca de titularidade.",
		icon: <ClockIcon />,
	},
	{
		title: "Hotéis",
		desc: "Encontre um hotel para o seu destino.",
		icon: <BedIcon />,
	},
	{
		title: "Bagagem",
		desc: "Veja opções e detalhes sobre bagagens.",
		icon: <LuggageIcon />,
	},
	{
		title: "Check-in",
		desc: "Faça check-in e confirme sua presença na viagem.",
		icon: <WheelIcon />,
	},
	{
		title: "Plano",
		desc: "Crie um plano TransMateus e obtenha benefícios.",
		icon: <MoneyIcon />,
	},
];

function ManageYourTripSection() {
	return (
		<SafeArea className="manage-your-trip-section">
			<div className="section-title">Gerencie sua viagem</div>
			<div className="menu">
				{cards.map((c) => (
					<Card {...c} />
				))}
			</div>
		</SafeArea>
	);
}

function CalloutBanner() {
	return (
		<SafeArea className="callout-banner">
			<div className="col">
				<div className="title">
					São Mateus está com muita saudade de você!
				</div>
				<div className="desc">
					Visite o destino mais desejado do norte do Espírito Santo
					com o melhor preço que você pode encontrar!
				</div>
				<div className="action-button">Comprar passagens</div>
			</div>
		</SafeArea>
	);
}

function Footer() {
	return (
		<SafeArea className="footer">
			<Brand />
		</SafeArea>
	);
}

import Brand from "../components/Brand";
import TripForm from "../forms/TripForm";
import "./MainHeader.css";

export default function MainHeader() {
	return (
		<div className="main-header">
			<div className="banner"></div>
			<div className="group">
				<div className="inner self">
					<div className="row">
						<Brand />
						<div className="login-button">Acessar minha conta</div>
					</div>
					<TripForm />
				</div>
			</div>
		</div>
	);
}

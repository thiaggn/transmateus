import { Route, Switch } from "wouter";
import "./App.css";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
	return (
		<div className="app-layout">
			<Switch>
				<Route path="/" component={Home} />
				<Route path="/search" component={Search} />
			</Switch>
		</div>
	);
}

export default App;

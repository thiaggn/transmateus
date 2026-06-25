import "./common.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, Switch } from "wouter";

import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Switch>
			<Route path="/" component={HomePage} />
			<Route path="/results" component={ResultsPage} />
		</Switch>
	</StrictMode>,
);

import './common.css'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, Switch } from "wouter";


createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Switch>
			<Route path="/" component={() => <div>ok</div>} />
		</Switch>
	</StrictMode>,
);

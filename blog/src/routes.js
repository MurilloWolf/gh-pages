import { Switch, Route } from "react-router-dom";
import LandPage from "./pages/LandPage";
export default function MainRoutes() {
	return (
		<Switch>
			<Route exact path="/">
				<LandPage />
			</Route>
			<Route path="main-layout"></Route>
		</Switch>
	);
}

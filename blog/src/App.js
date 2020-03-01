import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import dark from "./styles/themes/dark";

import MainLayout from "./components/layout/Main";
import LandPage from "./pages/LandPage/LandPage";
function App() {
	return (
		<Router>
			<ThemeProvider theme={dark}>
				<GlobalStyle />
				<LandPage />
			</ThemeProvider>
		</Router>
	);
}

export default App;

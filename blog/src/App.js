import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import dark from "./styles/themes/dark";

import MainLayout from "./components/layout/Main";

function App() {
	return (
		<Router>
			<ThemeProvider theme={dark}>
				<GlobalStyle />
			</ThemeProvider>
		</Router>
	);
}

export default App;

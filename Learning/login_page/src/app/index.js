import { BrowserRouter as Router } from "react-router-dom";

import Body   from "./components/body";
import Footer from "./components/footer";
import Header from "./components/header";

const App = () => {
	return (
		<Router>

			<Header />

			<Body />

			<Footer />
		</Router>
	);
};

export default App;

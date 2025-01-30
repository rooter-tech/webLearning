import { useEffect, useState } from "react";
import { Route, Routes }       from "react-router-dom";
import { useNavigate }         from "react-router-dom";

import Login   from "./login";
import Welcome from "./welcome";

import "./body.css";

function Body () {
	const navigate                      = useNavigate ();
	const [ username, setUsername ]     = useState ( "" );
	const [ isLoggedIn, setIsLoggedIn ] = useState ( false );

	function handleLogout () {
		setIsLoggedIn ( false );
	}

	useEffect ( () => {
		if ( !isLoggedIn )
			return navigate ( "/login" );

		navigate ( "/" );
	}, [ isLoggedIn ] );

	return (
		<div className = "App">
			<div className = "center">
				<Routes>
					<Route
						index
						element  = { (
							<Welcome
								handleLogout = { handleLogout }
								username     = { username }
							/>
						) }
					/>

					<Route
						element = { (
							<Login
								isLoggedIn                             = { isLoggedIn }
								setIsLoggedIn                          = { setIsLoggedIn }
								setUsername                            = { setUsername }
								username                               = { username }
							/>
						) }
						path    = "/login"
					/>
				</Routes>

			</div>
		</div>
	);
}

export default Body;

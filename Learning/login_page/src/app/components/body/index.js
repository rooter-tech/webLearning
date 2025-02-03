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
	const loggedIn                      = window.localStorage.getItem ( "loggedIn" );

	function handleLogout () {
		setIsLoggedIn ( false );
		window.localStorage.removeItem ( "loggedIn" );
	}

	useEffect ( () => {
		if ( !isLoggedIn && !loggedIn )
			return navigate ( "/login" );

		navigate ( `/user/${ username }` );
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
						path     = { `/user/${ username }` }
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

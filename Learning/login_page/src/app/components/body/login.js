import { useState } from "react";

import "./body.css";

function Login ( {
	username,
	setUsername,
	setIsLoggedIn
} ) {
	const [ password, setPassword ] = useState ( "" );

	const handleUsernameChange = event => {
		setUsername ( event.target.value );
	};

	const handlePasswordChange = event => {
		setPassword ( event.target.value );
	};

	function loginUser ( username, password ) {
		if ( password === "QWERTY" && username !== "" ) {
			setIsLoggedIn ( true );
		} else if ( username === "" ) {
			alert ( "Username cannot be empty!" );
		} else {
			alert ( "Wrong Password!" );
		}
	}

	return (
		<div className = "container">
			<img
				alt = "Google Logo"
				src = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
			/>

			<div className = "searchBarContainer">
				<input
					className   = "searchbar"
					id          = "username"
					onChange    = { handleUsernameChange }
					placeholder = "Enter your Username"
					title       = "username"
					type        = "text"
					value       = { username }
				/>
			</div>

			<div className = "searchBarContainer">
				<input
					className   = "searchbar"
					id          = "password"
					onChange    = { handlePasswordChange }
					placeholder = "Enter your Password"
					title       = "password"
					type        = "password"
					value       = { password }
				/>
			</div>

			<br />

			<button
				className = "search-button"
				onClick   = { () => loginUser ( username, password ) }
			>
				Login
			</button>
		</div>
	);
}

export default Login;

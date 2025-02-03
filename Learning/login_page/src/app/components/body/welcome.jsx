import "./body.css";

function Welcome ( { username, handleLogout } ) {
	return (
		<div className = "container">
			<h1>
				{`Welcome ${ username }`}
			</h1>

			<button
				className = "search-button"
				onClick   = { handleLogout }
			>
				Logout
			</button>
		</div>
	);
}

export default Welcome;

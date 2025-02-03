import "./header.css";

function Header () {
	return (
		<div className = "Header">
			<header className = "header">
				<div className = "header-item">
					<div className = "header-child-container">
						<a className       = "header-child"
							href              = ""
						>
							About
						</a>

						<a className       = "header-child"
							href              = ""
						>
							Store
						</a>
					</div>

					<div className = "header-child-container">
						<a className       = "header-child"
							href              = ""
						>
							Gmail
						</a>

						<a className       = "header-child"
							href              = ""
						>
							Images
						</a>

						<button className = "sign-in-button">
							Sign In
						</button>
					</div>
				</div>
			</header>
		</div>
	);
}

export default Header;

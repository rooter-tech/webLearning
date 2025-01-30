import "./footer.css";

function Footer () {
	return (
		<div className = "Footer">
			<footer className = "footer">
				<div className = "footer-item">India</div>

				<div className = "footer-item">
					<div className = "footer-child-container">
						<a className     = "footer-child"
							href            = ""
						>
							Advertising
						</a>

						<a className     = "footer-child"
							href            = ""
						>
							Business
						</a>

						<a className     = "footer-child"
							href            = ""
						>
							How Search Works
						</a>
					</div>

					<div className = "footer-child-container">
						<a className       = "footer-child"
							href              = ""
						>
							Privacy
						</a>

						<a className       = "footer-child"
							href              = ""
						>
							Terms
						</a>

						<a className       = "footer-child"
							href              = ""
						>
							Settings
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;

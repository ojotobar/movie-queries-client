import { Link } from "react-router-dom";
import "../../App.css";
import Logo from "./Logo";

const NavigationBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark fixed-top NavigationBar">
			<div className="container">
				<Link className="navbar-brand fs-4" to="/">
					<Logo />
				</Link>
			</div>
		</nav>
	);
};

export default NavigationBar;

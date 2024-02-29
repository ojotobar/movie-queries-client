import { Col, Container, Row } from "react-bootstrap";
import { getCurrentYear } from "../../settings/helpers";

const Footer = () => {
	return (
		<Container fluid className="Footer">
			<Row className="pt-2">
				<h3 className="p-0 m-0 text-center fw-bold">Movie Search</h3>
			</Row>
			<Row className="pt-2">
				<Col className="d-flex justify-content-center align-items-bottom">
					<p className="SmallFont MutedForDarkGreen">
						Copyright &copy; {getCurrentYear()}. All Rights Reserved.
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;

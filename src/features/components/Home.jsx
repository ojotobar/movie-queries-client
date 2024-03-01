import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import SearchBar from "./SearchBar";
import Movies from "./Movies";

const Home = () => {
	const [isLoading, setIsLoading] = useState(false);
  	const [isError, setIsError] = useState(false);
	const [movieData, setMovieData] = useState(null);
	
	return (
		<Container fluid className="m-0 p-0">
			<Row className="m-0 p-0">
				<Row className="mt-3 mb-5 m-auto m-0 p-0">
					<section className="mt-5">
						<div className="pb-5">
							<Col className="m-auto">
								<SearchBar
									setMovieData={setMovieData}
									setIsLoading={setIsLoading}
									setIsError={setIsError}
								/>
								<Row className="m-auto" style={{border: '2px solid #212121', margin: '0 1px 0 1px', width: "80%"}}></Row>
								<Movies
									isLoading={isLoading}
									isError={isError}
									movieData={movieData}
								/>
							</Col>
						</div>
					</section>
				</Row>
			</Row>
		</Container>
	);
};

export default Home;

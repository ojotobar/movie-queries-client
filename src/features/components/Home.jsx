import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import SearchBar from "./SearchBar";
import useDebounce from "../../hooks/useDebounce";
import Movies from "./Movies";

const Home = () => {
	const [searchValue, setSearchValue] = useState('');
	const debouncedSearchValue = useDebounce(searchValue, 1000);
	
	return (
		<Container fluid className="m-0 p-0">
			<Row className="m-0 p-0">
				<Row className="mt-3 mb-5 m-auto">
					<section className="mt-5">
						<div className="pb-5">
							<Col className="m-auto">
								<SearchBar 
									searchValue={searchValue}
									setSearchValue={setSearchValue}
								/>
								<Movies searchTerm={debouncedSearchValue}/>
							</Col>
						</div>
					</section>
				</Row>
			</Row>
		</Container>
	);
};

export default Home;

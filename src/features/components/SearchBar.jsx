import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'

const SearchBar = ({ searchValue, setSearchValue }) => {
  return (
    <Container fluid className='m-auto'>
        <Row className="text-center m-auto">
            <Form onSubmit={(e) => e.preventDefault()}>
                <Row className='mt-5 CenterSearchBar'>
                    <Col xs={0} md={3}></Col>
                    <Col xs={12} md={4} className='mb-2'>
                        <Form.Control 
                            placeholder="Search"
                            type='text'
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            autoFocus
                        />
                    </Col>
                    <Col xs={0} md={3}></Col>
                </Row>
            </Form>
		</Row>
		<Row className="m-auto" style={{border: '2px solid #212121', margin: '0 1px 0 1px', width: "80%"}}></Row>
    </Container>
  )
}

export default SearchBar
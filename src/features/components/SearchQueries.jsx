import React from 'react'
import { Badge, Col, Row } from 'react-bootstrap'

const SearchQueries = ({ searchQueries }) => {
  return (
    <>
        <Row className='CenterSearchBar mt-3 mb-2'>
          <p className='h5'>Recent Searches</p>
          <Col className='Box CenterSearchBar'>
            {
              searchQueries && searchQueries.map((item, index) => (
                <Badge key={index} className='p-1 mx-1 mt-1' bg="secondary">{item}</Badge>
              ))
            }
          </Col>
        </Row>
    </>
  )
}

export default SearchQueries
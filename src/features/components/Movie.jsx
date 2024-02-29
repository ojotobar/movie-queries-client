import React from 'react'
import { Card, Image, Row } from 'react-bootstrap';

const Movie = ({ movie }) => {
  return (
    <Row className='CenterSearchBar'>
        <Card className='Dimensions' style={{ maxHeight: '20rem' }}>
          <Image
            src={movie?.poster}
            fluid
            className='Dimensions CenterSearchBar m-auto'
          />
          <Card.Body>
            <Card.Title>{movie?.title}</Card.Title>
          </Card.Body>
        </Card>
    </Row>
  )
}

export default Movie;
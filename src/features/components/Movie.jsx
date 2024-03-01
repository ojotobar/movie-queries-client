import { Card, Image, Row } from 'react-bootstrap';

const Movie = ({ movie }) => {
  return (
    <Row className='CenterSearchBar m-0 p-0'>
        <Card className='Dimensions m-0 p-0' style={{ maxHeight: '20rem' }}>
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
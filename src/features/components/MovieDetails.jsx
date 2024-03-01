import { Badge, Button, Card, Container, Image, Row, Spinner } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import { useGetMovieByIdQuery } from '../api/moviesApi';

const MovieDetails = () => {
    const { id } = useParams();
    const { data: movie, isLoading } = useGetMovieByIdQuery(id);
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1, { replace: true })
    }

  return (
    <Container>
        <Row className='CenterSearchBar m-1'>
            {
                isLoading ?
                <Spinner className='mt-5' style={{ width: "3rem", height: "3rem" }}/> :
                <>
                    <Card className='my-5' style={{ width: '25rem' }}>
                        <Image
                            src={movie?.poster}
                            fluid
                            className='ImageHeight'
                        />
                        <Card.Body>
                            <Card.Title>{movie?.title}</Card.Title>
                            <Card.Text>
                            <span className='px-1'>
                                <Badge className='p-1' bg="secondary">{movie?.rated}</Badge>
                            </span>
                            <span className='px-1'>
                                <Badge className='p-1' bg='secondary'>{movie?.imDbRating}</Badge>
                            </span>
                            <span className='px-2 text-muted'>{movie?.runtime}</span>
                            </Card.Text>
                            <Card.Text className='text-muted'>{movie?.year}</Card.Text>
                            <Card.Text className='text-muted'>{movie?.plot}</Card.Text>
                            <Button onClick={goBack} className='ButtonToLink'>Back</Button>
                        </Card.Body>
                    </Card>
                </>
            }
        </Row>
    </Container>
  )
}

export default MovieDetails
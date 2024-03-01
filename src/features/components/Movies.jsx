import { Col, Container, Row, Spinner, Toast } from 'react-bootstrap'
import Movie from './Movie'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const Movies = ({ isLoading, isError, movieData }) => {
    useEffect(() => {
        if(isError){
            toast.error("An unexpected error occurred. Please try again.")
        }
    }, [isError]);

    const content = movieData?.search && movieData?.search?.length > 0 ? 
            movieData?.search.map(movie => (
            <Col key={movie?.imDbId} className=''>
                <Link to={`/movies/${movie?.imDbId}`} className="DeLink">
                    <Movie movie={movie} />
                </Link>
            </Col>
          )) :
            <Toast className='m-auto mt-2' bg='secondary'>
                <Toast.Body className='text-white'>
                    <p>No movie found.</p>
                </Toast.Body>
            </Toast>

  return (
    <Container className='mt-5 m-auto CenterSearchBar m-0 p-0'>
        <Row className="mt-5 m-auto CenterSearchBar m-0 p-0">
        {
            isLoading ?
                <Spinner style={{ width: "3rem", height: "3rem" }}/> :
            <Row xs={1} sm={1} md={2} lg={4} className="g-3 m-0 p-0 d-flex justify-content-center">
                { content }
            </Row>
        }
        </Row>
    </Container>
  )
}

export default Movies
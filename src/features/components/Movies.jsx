import useSWR from 'swr'
import { getMovieSearchResult } from '../api/movieApi'
import { Col, Container, Row, Spinner, Toast } from 'react-bootstrap'
import Movie from './Movie'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const Movies = ({ searchTerm }) => {
    const {
        isLoading,
        error,
        data
    } = useSWR(searchTerm ? searchTerm : null, getMovieSearchResult)

    useEffect(() => {
        if(error){
            toast.error(error?.message)
        }
    }, [error])

    const content = data?.search && data?.search?.length > 0 ? 
            data?.search.map(movie => (
            <Col key={movie?.imDbId}>
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
    <Container className='mt-5 m-auto CenterSearchBar'>
        <Row className="mt-5 m-auto CenterSearchBar">
        {
            isLoading ?
                <Spinner style={{ width: "3rem", height: "3rem" }}/> :
            <Row xs={1} sm={1} md={2} lg={4} className="g-3">
                { content }
            </Row>
        }
        </Row>
    </Container>
  )
}

export default Movies
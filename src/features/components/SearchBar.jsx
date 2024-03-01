import { useState } from 'react'
import { Badge, Button, Col, Container, Form, Row } from 'react-bootstrap'
import { getMovieSearchResult } from '../api/movieApi'
import SearchQueries from './SearchQueries';

const SearchBar = ({ setIsLoading, setIsError, setMovieData }) => {
  const [search, setSearch] = useState('');
  const [searchQueries, setSearcheQueries] = useState([]);

  const onChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
    }
    e.preventDefault();
    if(search){
      setIsLoading(true)
      const data = await getMovieSearchResult(search);
      if(data){
        setIsLoading(false)
        if(data.response === "False"){
          setIsError(true)
        }
      }
      setSearch('')
      setMovieData(data)
    }

    saveQueries(search);
  };

  const saveQueries = (value) => {
    if(value){
      var recent = JSON.parse(
        localStorage.getItem('recent')
      )
  
      if(recent){
        const index = recent.indexOf(value);
        if(recent.length >= 5){
          // remove the last element if equal or greater than 5
          recent.pop();
        }
        if(index > -1){
          // remove the element if already in the list
          recent.splice(index, 1);
        }
        //add the item to the beginning of the list
        recent.unshift(value);
      } else {
        searchQueries.unshift(value)
        recent = searchQueries;
      }
  
      setSearcheQueries(recent);
      localStorage.setItem('recent', JSON.stringify(recent));
    }
  }

  return (
    <Container fluid className='m-auto'>
      <Row className="text-center m-auto">
        <Form onSubmit={handleSubmit}>
            <Row className='mt-5 CenterSearchBar'>
                <Col xs={0} sm={0} md={3}></Col>
                <Col xs={12} sm={12} md={4} className='mb-2'>
                  <Row>
                    <Col xs={12} sm={12} md={8} className='m-0 p-0 mt-1'>
                      <Form.Control 
                          placeholder="Enter movie title"
                          type='text'
                          value={search}
                          onChange={onChange}
                          autoFocus
                      />
                    </Col>
                    <Col xs={12} sm={12} md={4} className='m-0 p-0 mt-1 px-1'>
                      <Button type="submit" className='w-100 ButtonColor'>Search</Button>
                    </Col>
                  </Row>
                </Col>
                <Col xs={0} sm={0} md={3}></Col>
            </Row>
        </Form>
        <SearchQueries
          searchQueries={searchQueries} 
        />
		  </Row>
    </Container>
  )
}

export default SearchBar
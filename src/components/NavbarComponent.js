import React from 'react'
import { Navbar, Container, Form, FormControl, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

import { useForm } from '../hooks/useForm'
import { search } from '../actions/query'

const NavbarComponent = () => {
  const [formValues, handleInputChange] = useForm({
    searchText: ''
  })

  const { searchText } = formValues

  const dispatch = useDispatch()

  const handlerSearch = (e) => {
    e.preventDefault()

    dispatch(search(searchText))
  }

  return (
    <Navbar bg='dark'>
      <Container>
        <Navbar.Collapse id='scroll' className='justify-content-center'>
          <Form className='d-flex' onSubmit={handlerSearch}>
            <FormControl
              type='text'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
              autoComplete='off'
              name='searchText'
              value={searchText}
              onChange={handleInputChange}
            />
            <Button variant='outline-light' type='submit'>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default NavbarComponent

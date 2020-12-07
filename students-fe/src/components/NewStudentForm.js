import React, { useState, useEffect } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

import axios from 'axios'

import { API_URL } from '../constants'

export default function NewStudentForm({ student, resetState, toggle }) {
  const [state, setState] = useState({
    pk: 0,
    name: '',
    email: '',
    document: '',
    phone: '',
  })

  useEffect(() => {
    if (student) {
      setState(student)
    }
  }, [])

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const createStudent = (e) => {
    e.preventDefault()
    axios
      .post(API_URL, state)
      .then(() => {
        resetState()
        toggle()
      })
      .catch((err) => console.log(err))
  }

  const editStudent = (e) => {
    e.preventDefault()
    axios.put(API_URL + state.pk, state).then(() => {
      resetState()
      toggle()
    })
  }

  const defaultIfEmpty = (value) => (value === '' ? '' : value)

  return (
    <Form onSubmit={student ? editStudent : createStudent}>
      <FormGroup>
        <Label for="name">Name:</Label>
        <Input
          type="text"
          name="name"
          onChange={onChange}
          value={defaultIfEmpty(state.name)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email:</Label>
        <Input
          type="email"
          name="email"
          onChange={onChange}
          value={defaultIfEmpty(state.email)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="document">Document:</Label>
        <Input
          type="text"
          name="document"
          onChange={onChange}
          value={defaultIfEmpty(state.document)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="phone">Phone:</Label>
        <Input
          type="text"
          name="phone"
          onChange={onChange}
          value={defaultIfEmpty(state.phone)}
        />
      </FormGroup>
      <Button>Send</Button>
    </Form>
  )
}

import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'reactstrap'
import StudentList from './StudentList'
import NewStudentModal from './NewStudentModal'

import axios from 'axios'
import { API_URL } from '../constants'

export default function Home() {
  const [state, setState] = useState({
    students: [],
  })

  useEffect(() => {
    getStudents()
  }, [])

  const getStudents = () => {
    axios.get(API_URL).then((res) => {
      console.log({ res })
      setState({
        students: res.data,
      })
    })
  }

  return (
    <Container style={{ marginTop: '20px' }}>
      <Row>
        <Col>
          <StudentList students={state.students} resetState={getStudents} />
        </Col>
      </Row>
      <Row>
        <Col>
          <NewStudentModal create={true} resetState={getStudents} />
        </Col>
      </Row>
    </Container>
  )
}

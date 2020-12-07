import React, { Fragment, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import NewStudentForm from './NewStudentForm'

export default function NewStudentModal({ create, student, resetState }) {
  const [modal, setModal] = useState(false)

  const toggle = () => {
    setModal((modal) => !modal)
  }

  let title = 'Editing Student'
  let button = <Button onClick={toggle}>Edit</Button>
  if (create) {
    title = 'Creating New Student'
    button = (
      <Button
        color="primary"
        className="float-right"
        onClick={toggle}
        style={{ minWidth: '200px' }}
      >
        Create New
      </Button>
    )
  }

  return (
    <Fragment>
      {button}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>

        <ModalBody>
          <NewStudentForm
            resetState={resetState}
            toggle={toggle}
            student={student}
          />
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

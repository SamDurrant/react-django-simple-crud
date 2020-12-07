import React, { Fragment, useState } from 'react'
import { Modal, ModalHeader, Button, ModalFooter } from 'reactstrap'

import axios from 'axios'
import { API_URL } from '../constants'

export default function ConfirmRemovalModal({ pk, resetState }) {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal((modal) => !modal)
  }

  const deleteStudent = (pk) => {
    axios.delete(API_URL + pk).then(() => {
      resetState()
      toggleModal()
    })
  }

  return (
    <Fragment>
      <Button color="danger" onClick={toggleModal}>
        Remove
      </Button>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          Do you really wanna delete the student?
        </ModalHeader>

        <ModalFooter>
          <Button type="button" onClick={toggleModal}>
            Cancel
          </Button>
          <Button
            type="button"
            color="primary"
            onClick={() => deleteStudent(pk)}
          >
            Yes
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  )
}

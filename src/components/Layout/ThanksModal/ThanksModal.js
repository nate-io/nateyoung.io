import React from 'react'
import PropTypes from 'prop-types'

import Modal from 'react-bootstrap/Modal'

import './ThanksModal.scss'

const thanks = [ 
  {
    link: 'https://unsplash.com/@pawel_czerwinski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    label: 'Paweł Czerwiński'
  }, 
  {
    link: 'https://unsplash.com/t/textures-patterns?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText', 
    label: 'Unsplash'
  } 
]

const ThanksLink = ({ link, label }) => (
  <a href={link} target='_blank' rel='noopener noreferrer'>{label}</a>
)

function ThanksModal({ isModalOpen, handleClose }) {
  return (
    <Modal 
      className='ThanksModal'
      centered
      onHide={handleClose}
      show={isModalOpen} 
    >
      <Modal.Header closeButton>
        <Modal.Title>Thanks!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>A special thanks to the following people for the resources they created:</p>

        <ul>
          <li>
            Background image provided by <ThanksLink { ...thanks[0]} /> via <ThanksLink { ...thanks[1] }/>
          </li>
        </ul>
      </Modal.Body>
    </Modal>
  )
}

ThanksModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
}

export default ThanksModal
import React from 'react'
import Modal from 'react-modal'
import numeral from 'numeral'

const RemoveModal = (props) => (
  <Modal
    isOpen={props.isOpen}
    onRequestClose={props.onRequestClose}
    contentLabel={props.expense.description}
    closeTimeoutMS={200}
    className="modal"
  >
    <div className="modal__body">
      <h2 className="modal__title">Remove {props.expense.description}</h2>
      <p>totalling: {numeral(props.expense.amount / 100).format('$0,0.00')}</p>
      <button className="button button--third" onClick={props.onRemove}>Remove</button>
    </div>
  </Modal>
)

export default RemoveModal

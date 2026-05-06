import { Modal, Button } from 'react-bootstrap'

function DeleteModal({ show, onConfirm, onCancel }) {
  return (
    <Modal show={show} onHide={onCancel} centered>
      <Modal.Header closeButton><Modal.Title>Delete Task</Modal.Title></Modal.Header>
      <Modal.Body>Are you sure you want to delete this task? This cannot be undone.</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>Cancel</Button>
        <Button variant="danger" onClick={onConfirm}>Delete</Button>
      </Modal.Footer>
    </Modal>
  )
}
export default DeleteModal
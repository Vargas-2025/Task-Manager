import { Container } from 'react-bootstrap'

function EmptyState({ message = 'No tasks found.' }) {
  return (
    <Container className="text-center py-5">
      <p className="text-muted fs-5">{message}</p>
    </Container>
  )
}
export default EmptyState
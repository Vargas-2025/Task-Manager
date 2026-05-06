import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <h1 className="mb-3">Welcome to Task Manager</h1>
          <p className="lead mb-4">Stay organized and on top of your work. Create tasks, track their status, and get things done.</p>
          <Button as={Link} to="/tasks" variant="primary" size="lg">View My Tasks</Button>
        </Col>
      </Row>
      <Row className="mt-5 text-center">
        <Col md={4} className="mb-4"><h4>Create</h4><p className="text-muted">Add new tasks with a title, description, status, and due date.</p></Col>
        <Col md={4} className="mb-4"><h4>Track</h4><p className="text-muted">Filter and search tasks to see what is pending, in progress, or complete.</p></Col>
        <Col md={4} className="mb-4"><h4>Manage</h4><p className="text-muted">Edit or delete tasks as your work evolves.</p></Col>
      </Row>
    </Container>
  )
}
export default Home
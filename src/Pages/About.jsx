import { Container, Row, Col } from 'react-bootstrap'

function About() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="mb-4">About Task Manager</h1>
          <p className="lead">Task Manager is a full CRUD React application built as a final project for a web development course.</p>
          <p>It uses MockAPI as a backend to store and retrieve task data in real time. Every task you create, update, or delete is reflected immediately through live API calls.</p>
          <h5 className="mt-4">Built With</h5>
          <ul>
            <li>React with Vite</li>
            <li>React Router for page navigation</li>
            <li>React Bootstrap for styling</li>
            <li>MockAPI for backend data storage</li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}
export default About
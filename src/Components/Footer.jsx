import { Container } from 'react-bootstrap'

function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <Container className="text-center">
        <p className="mb-0">Task Manager &copy; {new Date().getFullYear()}</p>
      </Container>
    </footer>
  )
}
export default Footer
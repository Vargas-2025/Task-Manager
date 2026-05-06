import { Form } from 'react-bootstrap'

function SearchBar({ searchTerm, onSearch }) {
  return (
    <Form.Control type="text" placeholder="Search tasks..." value={searchTerm}
      onChange={(e) => onSearch(e.target.value)} className="mb-3" />
  )
}
export default SearchBar
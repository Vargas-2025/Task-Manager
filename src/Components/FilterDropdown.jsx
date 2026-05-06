import { Form } from 'react-bootstrap'

function FilterDropdown({ filterValue, onFilter }) {
  return (
    <Form.Select value={filterValue} onChange={(e) => onFilter(e.target.value)} className="mb-3">
      <option value="">All Statuses</option>
      <option value="pending">Pending</option>
      <option value="in-progress">In Progress</option>
      <option value="complete">Complete</option>
    </Form.Select>
  )
}
export default FilterDropdown
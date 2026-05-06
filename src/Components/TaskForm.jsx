import { useState, useEffect } from 'react'
import { Form, Button, Stack } from 'react-bootstrap'

function TaskForm({ onSubmit, editTask, onCancel }) {
  const [formData, setFormData] = useState({ title: '', description: '', status: 'pending', dueDate: '' })

  useEffect(() => {
    if (editTask) { setFormData(editTask) }
    else { setFormData({ title: '', description: '', status: 'pending', dueDate: '' }) }
  }, [editTask])

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
    setFormData({ title: '', description: '', status: 'pending', dueDate: '' })
  }

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Task title" required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" name="description" value={formData.description} onChange={handleChange} placeholder="What needs to get done?" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Status</Form.Label>
        <Form.Select name="status" value={formData.status} onChange={handleChange}>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="complete">Complete</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} />
      </Form.Group>
      <Stack direction="horizontal" gap={2}>
        <Button type="submit" variant="primary">{editTask ? 'Update Task' : 'Add Task'}</Button>
        {editTask && <Button variant="outline-secondary" onClick={onCancel}>Cancel</Button>}
      </Stack>
    </Form>
  )
}
export default TaskForm
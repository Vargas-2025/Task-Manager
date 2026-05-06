import { Card, Button, Stack } from 'react-bootstrap'
import StatusBadge from './StatusBadge'

function TaskCard({ task, onEdit, onDelete }) {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Stack direction="horizontal" className="justify-content-between mb-2">
          <Card.Title className="mb-0">{task.title}</Card.Title>
          <StatusBadge status={task.status} />
        </Stack>
        <Card.Text>{task.description}</Card.Text>
        <Card.Text><small className="text-muted">Due: {task.dueDate}</small></Card.Text>
        <Stack direction="horizontal" gap={2}>
          <Button variant="outline-primary" size="sm" onClick={() => onEdit(task)}>Edit</Button>
          <Button variant="outline-danger" size="sm" onClick={() => onDelete(task.id)}>Delete</Button>
        </Stack>
      </Card.Body>
    </Card>
  )
}
export default TaskCard
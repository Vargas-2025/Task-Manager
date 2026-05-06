import TaskCard from './TaskCard'
import EmptyState from './EmptyState'

function TaskList({ tasks, onEdit, onDelete }) {
  if (tasks.length === 0) return <EmptyState message="No tasks found. Add one to get started!" />
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  )
}
export default TaskList
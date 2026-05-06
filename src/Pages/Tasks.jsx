import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { getTasks, createTask, updateTask, deleteTask } from '../api/Tasks'
import TaskForm from '../Components/TaskForm'
import TaskList from '../Components/TaskList'
import SearchBar from '../Components/SearchBar'
import FilterDropdown from '../Components/FilterDropdown'
import DeleteModal from '../Components/DeleteModal'
import LoadingSpinner from '../Components/LoadingSpinner'

function Tasks() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [editTask, setEditTask] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [deleteId, setDeleteId] = useState(null)

  useEffect(() => { fetchTasks() }, [])

  const fetchTasks = async () => {
    setLoading(true)
    const data = await getTasks()
    setTasks(data)
    setLoading(false)
  }

  const handleCreate = async (formData) => { await createTask(formData); fetchTasks() }
  const handleUpdate = async (formData) => { await updateTask(editTask.id, formData); setEditTask(null); fetchTasks() }
  const handleDeleteClick = (id) => { setDeleteId(id); setShowModal(true) }
  const handleDeleteConfirm = async () => { await deleteTask(deleteId); setShowModal(false); setDeleteId(null); fetchTasks() }

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus ? task.status === filterStatus : true
    return matchesSearch && matchesFilter
  })

  return (
    <Container className="py-4">
      <h2 className="mb-4">My Tasks</h2>
      <Row>
        <Col md={4}>
          <TaskForm onSubmit={editTask ? handleUpdate : handleCreate} editTask={editTask} onCancel={() => setEditTask(null)} />
        </Col>
        <Col md={8}>
          <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
          <FilterDropdown filterValue={filterStatus} onFilter={setFilterStatus} />
          {loading ? <LoadingSpinner /> : <TaskList tasks={filteredTasks} onEdit={setEditTask} onDelete={handleDeleteClick} />}
        </Col>
      </Row>
      <DeleteModal show={showModal} onConfirm={handleDeleteConfirm} onCancel={() => setShowModal(false)} />
    </Container>
  )
}
export default Tasks
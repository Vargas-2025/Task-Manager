import { Badge } from 'react-bootstrap'

function StatusBadge({ status }) {
  const colorMap = { complete: 'success', 'in-progress': 'warning', pending: 'secondary' }
  const color = colorMap[status?.toLowerCase()] || 'secondary'
  return <Badge bg={color}>{status}</Badge>
}
export default StatusBadge
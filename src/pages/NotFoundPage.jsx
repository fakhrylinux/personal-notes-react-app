import {Link} from 'react-router-dom';

function NotFoundPage() {
  return (
      <h1>Error 404. Note not found. <Link to='/'>Back to Main Page</Link></h1>
  )
}

export default NotFoundPage;
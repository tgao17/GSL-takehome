import { Link } from 'react-router-dom';
export function NotFound() {
  return (
    <div>
      <div>404 page does not exist :/</div>
      <Link to='/'>Home from link</Link>
    </div>
  );
}

import { Link } from 'react-router-dom'

export default function NavLinks({ children, href }) {
  return (
    <li>
      <Link to={href}>{children}</Link>
    </li>
  )
}

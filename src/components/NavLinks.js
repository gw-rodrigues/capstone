export default function NavLinks({ children, href }) {
  return (
    <li>
      <a href={href}>{children}</a>
    </li>
  )
}

export default function FooterNavLinks({ children, href }) {
  return (
    <li>
      <a href={href}>{children}</a>
    </li>
  )
}

import NavLinks from './NavLinks'

export default function Nav() {
  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Menu', href: 'menu' },
    { name: 'Reservations', href: 'reservations' },
    { name: 'Order Online', href: 'order' },
    { name: 'Login', href: 'login' },
  ]
  return (
    <nav>
      <ul>
        {navLinks.map((item) => (
          <NavLinks href={item.href}>{item.name}</NavLinks>
        ))}
      </ul>
    </nav>
  )
}

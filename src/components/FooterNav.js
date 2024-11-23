import FooterNavLinks from './FooterNavLinks'

export default function FooterNav() {
  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Menu', href: 'menu' },
    { name: 'Reservations', href: 'reservations' },
    { name: 'Order Online', href: 'order' },
    { name: 'Login', href: 'login' },
  ]

  const ContactLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Menu', href: 'menu' },
    { name: 'Reservations', href: 'reservations' },
    { name: 'Order Online', href: 'order' },
    { name: 'Login', href: 'login' },
  ]

  const SocialLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Menu', href: 'menu' },
    { name: 'Reservations', href: 'reservations' },
    { name: 'Order Online', href: 'order' },
    { name: 'Login', href: 'login' },
  ]
  return (
    <section>
      <nav>
        <ul>
          {navLinks.map((item) => (
            <FooterNavLinks href={item.href}>{item.name}</FooterNavLinks>
          ))}
        </ul>
      </nav>
      <nav>
        <ul>
          {ContactLinks.map((item) => (
            <FooterNavLinks href={item.href}>{item.name}</FooterNavLinks>
          ))}
        </ul>
      </nav>
      <nav>
        <ul>
          {SocialLinks.map((item) => (
            <FooterNavLinks href={item.href}>{item.name}</FooterNavLinks>
          ))}
        </ul>
      </nav>
    </section>
  )
}

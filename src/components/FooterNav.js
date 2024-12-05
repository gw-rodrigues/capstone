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
    { name: 'Order Online', href: 'booking' },
    { name: 'Login', href: 'login' },
  ]
  return (
    <section>
      <img src="/Logo-small.svg" alt="Little Lemon" />
      <nav>
        <h3>Little Lemon</h3>
        <ul>
          {navLinks.map((item) => (
            <FooterNavLinks href={item.href}>{item.name}</FooterNavLinks>
          ))}
        </ul>
      </nav>
      <nav>
        <h3>Contact</h3>
        <ul>
          {ContactLinks.map((item) => (
            <FooterNavLinks href={item.href}>{item.name}</FooterNavLinks>
          ))}
        </ul>
      </nav>
      <nav>
        <h3>Social media links</h3>
        <ul>
          {SocialLinks.map((item) => (
            <FooterNavLinks href={item.href}>{item.name}</FooterNavLinks>
          ))}
        </ul>
      </nav>
    </section>
  )
}

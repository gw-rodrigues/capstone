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
    <div
      style={{
        width: '100%',
        height: '300px',
        backgroundColor: 'darkgray',
        display: 'flex',
      }}
    >
      <nav>
        {navLinks.map((item) => (
          <FooterNavLinks href={item.href}>{item.name}</FooterNavLinks>
        ))}
      </nav>
      <nav>
        {ContactLinks.map((item) => (
          <FooterNavLinks href={item.href}>{item.name}</FooterNavLinks>
        ))}
      </nav>
      <nav>
        {SocialLinks.map((item) => (
          <FooterNavLinks href={item.href}>{item.name}</FooterNavLinks>
        ))}
      </nav>
    </div>
  )
}

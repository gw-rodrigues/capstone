import { useState } from 'react'
import NavLinks from './NavLinks'
import HambugerIcon from '../assets/hambuger.svg'

export default function Nav() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '' },
    { name: 'About', href: 'about' },
    { name: 'Menu', href: 'menu' },
    { name: 'Reservations', href: 'reservations' },
    { name: 'Order Online', href: 'booking' },
    { name: 'Login', href: 'login' },
  ]

  const handleOpen = () => {
    setOpen((prev) => !prev)
  }

  return (
    <>
      <button onClick={handleOpen} open={open}>
        <img src={HambugerIcon} alt="Hambuger Menu" />
      </button>
      <nav open={open}>
        <ul>
          {navLinks.map((item) => (
            <NavLinks href={item.href}>{item.name}</NavLinks>
          ))}
        </ul>
      </nav>
    </>
  )
}

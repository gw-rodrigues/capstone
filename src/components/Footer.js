export default function Footer({ children }) {
  return (
    <footer>
      <img src="/Logo.svg" alt="Little Lemon" width={200} />
      {children}
    </footer>
  )
}

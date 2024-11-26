export default function Footer({ children }) {
  return (
    <footer>
      <section className="container">
        <img src="/Logo.svg" alt="Little Lemon" width={200} />
        {children}
      </section>
    </footer>
  )
}

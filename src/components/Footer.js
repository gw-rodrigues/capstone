export default function Footer({ children }) {
  return (
    <footer
      style={{
        width: '100%',
        height: '300px',
        backgroundColor: 'darkgray',
        display: 'flex',
      }}
    >
      <img src="/Logo.svg" alt="Little Lemon" width={200} />
      {children}
    </footer>
  )
}

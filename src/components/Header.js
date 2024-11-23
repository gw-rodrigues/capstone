export default function Header({ children }) {
  return (
    <header
      style={{
        width: '100%',
        height: '100px',
        backgroundColor: 'gray',
        display: 'flex',
      }}
    >
      {children}
    </header>
  )
}

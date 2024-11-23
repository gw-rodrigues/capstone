import './App.css'

import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import FooterNav from './components/FooterNav'

function App() {
  return (
    <>
      <Header>
        <img src="/Logo.svg" alt="Little Lemon" width={200} />
        <Nav />
      </Header>
      <Main></Main>
      <Footer>
        <FooterNav />
      </Footer>
    </>
  )
}

export default App

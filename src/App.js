import { Route, Routes } from 'react-router-dom'

import './App.css'

import Header from './components/Header'
import Nav from './components/Nav'

import Footer from './components/Footer'
import FooterNav from './components/FooterNav'

import Homepage from './pages/Home'
import BookingPage from './pages/Booking'

function App() {
  return (
    <>
      <Header>
        <img src="/Logo.svg" alt="Little Lemon" height={50} width={'auto'} />
        <Nav />
      </Header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
      <Footer>
        <FooterNav />
      </Footer>
    </>
  )
}

export default App

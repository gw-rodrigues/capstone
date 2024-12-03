import './App.css'

import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import FooterNav from './components/FooterNav'

import Image1 from './assets/img-1.png'
import Star from './assets/start.svg'

import H1 from './assets/h1.png'
import H2 from './assets/h2.png'
import H3 from './assets/h3.png'

import Bike from './assets/bike.svg'

import Chef1 from './assets/chef-1.png'
import Chef2 from './assets/chef-2.png'

function App() {
  return (
    <>
      <Header>
        <img src="/Logo.svg" alt="Little Lemon" height={50} width={'auto'} />
        <Nav />
      </Header>
      <Main>
        <section className="hero">
          <div className="container two-columns">
            <div className="col">
              <div>
                <h1>Little Lemon</h1>
                <p className="sub-title">Chicago</p>
              </div>
              <p className="lead-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button>Book a table</button>
            </div>
            <div className="col">
              <div className="overlay">
                <img
                  src={Image1}
                  alt="Banner images"
                  width={450}
                  height={450}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="highlights">
          <header>
            <h2>Specials</h2>
            <button>Online Menu</button>
          </header>
          <ul className="list">
            <li className="list-item">
              <div className="overlay">
                <img src={H1} alt="Greek Salad" />
              </div>
              <div className="container">
                <header>
                  <h3>Greek Salado</h3>
                  <span className="highlight-text">$12.99</span>
                </header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <footer>
                  <img src={Bike} alt="Bike Delivery" width={20} height={20} />
                  <p>Order delivery at $3</p>
                </footer>
              </div>
            </li>
            <li className="list-item">
              <div className="overlay">
                <img src={H2} alt="Buchecta" />
              </div>
              <div className="container">
                <header>
                  <h3>Buchecta</h3>
                  <span className="highlight-text">$6.99</span>
                </header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <footer>
                  <img src={Bike} alt="Bike Delivery" width={20} height={20} />
                  <p>Order delivery at $3</p>
                </footer>
              </div>
            </li>
            <li className="list-item">
              <div className="overlay">
                <img src={H3} alt="Lemon Desert" />
              </div>
              <div className="container">
                <header>
                  <h3>Lemon Desert</h3>
                  <span className="highlight-text">$5.00</span>
                </header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <footer>
                  <img src={Bike} alt="Bike Delivery" width={20} height={20} />
                  <p>Order delivery at $3</p>
                </footer>
              </div>
            </li>
          </ul>
        </section>
        <section className="testimonials">
          <div className="container list">
            <div className="list-item">
              <div className="overlay p-green">
                <img src="foto.jpg" alt="" />
              </div>
              <h3>John</h3>
              <div className="rating">
                <img src={Star} width={20} height={20} alt="Start" />
                <img src={Star} width={20} height={20} alt="Start" />
                <img src={Star} width={20} height={20} alt="Start" />
                <img src={Star} width={20} height={20} alt="Start" />
                <img src={Star} width={20} height={20} alt="Start" />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor aliqua...
              </p>
            </div>
            <div className="list-item">
              <div className="overlay p-yellow">
                <img src="foto.jpg" alt="" />
              </div>
              <h3>Ana</h3>
              <div className="rating">
                <img src={Star} width={20} height={20} alt="Start" />
                <img src={Star} width={20} height={20} alt="Start" />
                <img src={Star} width={20} height={20} alt="Start" />
                <img src={Star} width={20} height={20} alt="Start" />
                <img src={Star} width={20} height={20} alt="Start" />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </p>
            </div>
            <div className="list-item">
              <div className="overlay s-orange">
                <img src="foto.jpg" alt="" />
              </div>
              <h3>Mark</h3>
              <div className="rating">
                <img src={Star} width={20} height={20} alt="Start" />
                <img src={Star} width={20} height={20} alt="Start" />
                <img src={Star} width={20} height={20} alt="Start" />
                <img src={Star} width={20} height={20} alt="Start" />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, ...
              </p>
            </div>
            <div className="list-item">
              <div className="overlay s-light-orange">
                <img src="foto.jpg" alt="" />
              </div>
              <h3>Sofia</h3>
              <div className="rating">
                <img src={Star} width={20} height={20} alt="Start" />
                <img src={Star} width={20} height={20} alt="Start" />
                <img src={Star} width={20} height={20} alt="Start" />
                <img src={Star} width={20} height={20} alt="Start" />
                <img src={Star} width={20} height={20} alt="Start" />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor et dolore magna aliqua...
              </p>
            </div>
          </div>
        </section>
        <article>
          <section className="container two-columns">
            <div className="col">
              <div>
                <h4>Little Lemon</h4>
                <p className="sub-title">Chicago</p>
              </div>
              <p className="lead-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col">
              <div className="overlay">
                <img
                  className="img-1"
                  src={Chef1}
                  alt="Banner images"
                  width={300}
                  height={350}
                />
                <img
                  className="img-2"
                  src={Chef2}
                  alt="Banner images"
                  width={300}
                  height={350}
                />
              </div>
            </div>
          </section>
        </article>
      </Main>
      <Footer>
        <FooterNav />
      </Footer>
    </>
  )
}

export default App

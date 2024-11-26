import './App.css'

import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import FooterNav from './components/FooterNav'

import Image1 from './assets/img-1.jpg'
import Star from './assets/start.svg'

function App() {
  return (
    <>
      <Header>
        <img src="/Logo.svg" alt="Little Lemon" width="150px" />
        <Nav />
      </Header>
      <Main>
        <section className="hero">
          <div className="container two-columns">
            <div className="col">
              <div>
                <h1>The Little Lemon</h1>
                <p className="sub-title">Chicago</p>
              </div>
              <p className="lead-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="section-categories">Book a table</button>
            </div>
            <div className="col">
              <div className="image">
                <img src={Image1} alt="Banner images" />
              </div>
            </div>
          </div>
        </section>
        <section className="highlights">highlights</section>
        <section className="testimonials">
          <div className="container list">
            <div className="list-item">
              <div className="image green">
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
              <div className="image yellow">
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
              <div className="image orange">
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
              <div className="image light-orange">
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
        <article className='two-columns"'>
          <div className="col">a</div>
          <div className="col">a</div>
        </article>
      </Main>
      <Footer>
        <FooterNav />
      </Footer>
    </>
  )
}

export default App

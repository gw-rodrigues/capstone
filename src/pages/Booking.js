import Main from '../components/Main'
import Banner1 from '../assets/b-1.jpg'
import Star from '../assets/start.svg'

import H1 from '../assets/h1.png'
import H2 from '../assets/h2.png'
import H3 from '../assets/h3.png'

import Bike from '../assets/bike.svg'

import Chef1 from '../assets/chef-1.png'
import Chef2 from '../assets/chef-2.png'

export default function BookingPage() {
  const handleSubmit = () => {}

  return (
    <Main>
      <section className="hero banner">
        <div className="backdrop">
          <img src={Banner1} alt="Kitchen" />
        </div>

        <div className="container">
          <button>Onine menu</button>
        </div>
      </section>

      <article>
        <header>
          <h2>Reserve a table</h2>
        </header>
        <section className="container">
          <form onSubmit={handleSubmit} name="booking">
            <fieldset>
              <legend>Personal information</legend>
              <div className="field-group">
                <label for="firstname">
                  Firstname <span>*Required</span>
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="firstname..."
                ></input>
              </div>
              <div className="field-group">
                <label for="lastname">
                  Lastname <span>*Required</span>
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="lastname..."
                ></input>
              </div>
              <div className="field-group">
                <label for="email">
                  E-mail <span>*Required</span>
                </label>

                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="e-mail..."
                ></input>
              </div>
            </fieldset>
            <fieldset>
              <legend>Reserve information</legend>
              <div className="field-group">
                <label for="date">
                  Date: <span>*Required</span>
                </label>
                <input type="date" id="date" name="date" />
              </div>
              <div className="field-group">
                <label for="time">
                  Time: <span>*Required</span>
                </label>
                <div className="radio-group">
                  <label class="btn">
                    <input type="radio" name="time" value="12:00" />
                    12:00
                  </label>
                  <label class="btn">
                    <input type="radio" name="time" value="12:30" />
                    12:30
                  </label>
                  <label class="btn">
                    <input type="radio" name="time" value="13:00" />
                    13:00
                  </label>
                  <label class="btn">
                    <input type="radio" name="time" value="13:30" />
                    13:30
                  </label>
                  <label class="btn">
                    <input type="radio" name="time" value="14:00" />
                    14:00
                  </label>
                  <label class="btn">
                    <input type="radio" name="time" value="14:30" />
                    14:30
                  </label>
                  <label class="btn">
                    <input type="radio" name="time" value="15:00" />
                    15:00
                  </label>
                  <label class="btn">
                    <input type="radio" name="time" value="18:00" />
                    18:00
                  </label>
                  <label class="btn">
                    <input type="radio" name="time" value="18:30" />
                    18:30
                  </label>
                  <label class="btn">
                    <input type="radio" name="time" value="19:00" />
                    19:00
                  </label>
                  <label class="btn">
                    <input type="radio" name="time" value="19:30" />
                    19:30
                  </label>
                  <label class="btn">
                    <input type="radio" name="time" value="20:00" />
                    20:00
                  </label>
                  <label class="btn">
                    <input type="radio" name="time" value="20:30" />
                    20:30
                  </label>
                  <label class="btn">
                    <input type="radio" name="time" value="21:00" />
                    21:00
                  </label>
                </div>
              </div>

              <div className="field-group">
                <label for="occasion">Occasion:</label>
                <select id="occasion" name="occasion">
                  <option value="Aniversary">Aniversary</option>
                  <option value="Romantic">Romantic</option>
                  <option value="Thematic">Thematic</option>
                </select>
              </div>
            </fieldset>
            <div className="button-group">
              <button type="submit">Confirm reserve</button>
            </div>
          </form>
        </section>
      </article>
    </Main>
  )
}

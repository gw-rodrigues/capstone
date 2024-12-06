import Main from '../components/Main'
import Banner1 from '../assets/b-1.jpg'

import { FormInput } from '../components/FormInput'
import { FormNumber } from '../components/FormNumber'
import { FormRadio, FormRadioOption } from '../components/FormRadio'
import { FormSelect } from '../components/FormSelect'
import { useState } from 'react'

export default function BookingPage() {
  const [numDinners, setNumDinner] = useState(0)
  const bookingTime = [
    {
      id: 1,
      value: '12:00',
    },
    {
      id: 2,
      value: '12:30',
    },
    {
      id: 3,
      value: '13:00',
    },
    {
      id: 4,
      value: '13:30',
    },
    {
      id: 5,
      value: '14:00',
    },
    {
      id: 6,
      value: '14:30',
    },
    {
      id: 7,
      value: '15:00',
    },
    {
      id: 8,
      value: '18:00',
    },
    {
      id: 9,
      value: '18:30',
    },
    {
      id: 10,
      value: '19:00',
    },
    {
      id: 11,
      value: '19:30',
    },
    {
      id: 12,
      value: '20:00',
    },
    {
      id: 13,
      value: '20:30',
    },
    {
      id: 14,
      value: '21:00',
    },
  ]
  const occasionType = [
    {
      id: 0,
      value: 'Normal',
    },
    {
      id: 1,
      value: 'Aniversary',
    },
    {
      id: 2,
      value: 'Romantic',
    },
    {
      id: 3,
      value: 'Thematic',
    },
  ]

  function handleNumDinner(action) {
    if (action === 'minus' && numDinners > 0) {
      setNumDinner((prev) => prev - 1)
    }
    if (action === 'plus' && numDinners < 10) {
      setNumDinner((prev) => prev + 1)
    }
  }

  function handleSubmit() {}

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
              <FormInput
                labelFor="firstname"
                labelText="Firstname"
                required={true}
              >
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="firstname..."
                />
              </FormInput>
              <FormInput
                labelFor="lastname"
                labelText="Lastname"
                required={true}
              >
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="lastname..."
                />
              </FormInput>
              <FormInput labelFor="email" labelText="E-mail" required={true}>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="e-mail..."
                />
              </FormInput>
            </fieldset>
            <fieldset>
              <legend>Reserve information</legend>
              <FormInput labelFor="date" labelText="date" required={true}>
                <input type="date" id="date" name="date" />
              </FormInput>

              <FormRadio labelFor="time" labelText="Time" required={true}>
                {bookingTime.map((item) => (
                  <FormRadioOption labelText={item.value}>
                    <input
                      key={`time-${item.id}`}
                      type="radio"
                      name="time"
                      value={item.value}
                    />
                  </FormRadioOption>
                ))}
              </FormRadio>

              <FormNumber
                labelFor="dinners"
                labelText="Number dinners"
                required={true}
                handleValue={handleNumDinner}
              >
                <input
                  type="number"
                  id="dinners"
                  name="dinners"
                  placeholder="0"
                  max={10}
                  min={1}
                  value={numDinners}
                />
              </FormNumber>

              <FormSelect
                labelFor="occasion"
                labelText="Occasion"
                required={true}
              >
                <select id="occasion" name="occasion">
                  {occasionType.map((item) => (
                    <option key={`occasion-${item.id}`} value={item.value}>
                      {item.value}
                    </option>
                  ))}
                </select>
              </FormSelect>
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
